const http = require('http');
const path = require('path');
const fs = require('fs');
const express = require('express');
const { generateRegistrationOptions } = require('@simplewebauthn/server');
const { isoUint8Array } = require('@simplewebauthn/server/helpers');

const app = express();
app.disable('x-powered-by');
app.use(express.json());

const rootDir = path.resolve(__dirname, '..', '..');
const webDist = path.join(rootDir, 'web', 'dist');
const spaIndex = path.join(webDist, 'index.html');
const hasSpaBuild = fs.existsSync(spaIndex);
const publicDir = path.join(rootDir, 'public');

const serveStatic =
  process.env.SERVE_STATIC !== '0' && process.env.SERVE_STATIC !== 'false';

/** Memory DB (protótipo) */
const users = {
  'lucas.silva@exemplo.com': {
    id: 'user_123',
    username: 'lucas.silva@exemplo.com',
    devices: [],
  },
};

const rpID = 'localhost';

app.get('/health', (_req, res) => {
  res.json({
    ok: true,
    uptime: process.uptime(),
    spa: hasSpaBuild && serveStatic,
  });
});

app.post('/api/register-options', async (req, res, next) => {
  try {
    const user = users['lucas.silva@exemplo.com'];

    const options = await generateRegistrationOptions({
      rpName: 'ClickBus Smart Journey',
      rpID,
      userID: isoUint8Array.fromUTF8String(user.id),
      userName: user.username,
      attestationType: 'none',
      authenticatorSelection: {
        residentKey: 'preferred',
        userVerification: 'preferred',
        authenticatorAttachment: 'platform',
      },
    });

    user.currentChallenge = options.challenge;
    res.json(options);
  } catch (e) {
    next(e);
  }
});

if (serveStatic && hasSpaBuild) {
  app.use(express.static(webDist));
  app.use((req, res, next) => {
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      next();
      return;
    }
    if (req.path.startsWith('/api')) {
      next();
      return;
    }
    res.sendFile(spaIndex, (err) => {
      if (err) next(err);
    });
  });
} else if (serveStatic) {
  app.use(express.static(publicDir));
} else {
  app.get('/', (_req, res) => {
    res.type('json').send({
      ok: true,
      mode: 'api-only',
      hint: 'UI: npm run dev:web (Vite). Or build web and unset SERVE_STATIC=0.',
    });
  });
}

app.use((req, res) => {
  res.status(404).json({ error: 'Not found', path: req.path });
});

app.use((err, _req, res, _next) => {
  console.error(err);
  const status = typeof err.status === 'number' ? err.status : 500;
  res.status(status).json({
    error: err.message ?? 'Internal Server Error',
  });
});

const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST ?? '0.0.0.0';

const server = http.createServer(app);

server.listen(PORT, HOST, () => {
  const url = `http://localhost:${PORT}`;
  console.log('');
  console.log('ClickBus server está escutando.');
  console.log(`  • Local:     ${url}`);
  console.log(`  • Saúde:     ${url}/health`);
  console.log(`  • API:       POST ${url}/api/register-options`);
  if (serveStatic && hasSpaBuild) {
    console.log(`  • Frontend:  SPA em web/dist`);
  } else if (serveStatic) {
    console.log(`  • Frontend:  pasta public/`);
  } else {
    console.log(`  • Frontend:  desligado (SERVE_STATIC=0) — use Vite na :5173`);
  }
  console.log('');
  console.log('Pressione Ctrl+C para encerrar.');
  console.log('');
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(
      `\nErro: porta ${PORT} já está em uso. Encerre o outro processo ou use:\n  set PORT=3010&& npm run dev\n`,
    );
  } else {
    console.error(err);
  }
  process.exit(1);
});
