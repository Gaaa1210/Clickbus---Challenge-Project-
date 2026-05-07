# ClickBus — Protótipo (Flow)

Monorepo com **frontend React** (Vite + TypeScript + Tailwind CSS) e **backend Express** (API + opção de servir o build estático).

## Requisitos

- **Node.js** 20 ou superior (recomendado: LTS atual)
- **npm** (incluído com o Node)

## Estrutura do projeto

| Pasta | Conteúdo |
|-------|----------|
| `web/` | Aplicação React (UI, rotas, Tailwind) |
| `server/` | API Express (`/api/...`, health check, arquivos estáticos em produção) |
| `public/` | Legado estático (usado pelo servidor se **não** existir `web/dist`) |

## Instalação

Instale as dependências do **frontend** e do **backend** (pastas independentes):

```bash
cd web && npm install && cd ..
cd server && npm install && cd ..
```

Na raiz do repositório não há `package.json` com dependências; os scripts da raiz apenas delegam para `web/` e `server/`.

## Como rodar em desenvolvimento

O fluxo típico usa **dois terminais**: um para a API e outro para o Vite (interface com recarregamento rápido e proxy das chamadas `/api`).

### Terminal 1 — servidor (Express)

```bash
npm run dev:server
```

- Sobe a API em **http://localhost:3000** (porta padrão).
- Verificação rápida: abra **http://localhost:3000/health** — deve retornar JSON com `"ok": true`.
- Endpoint de exemplo: `POST http://localhost:3000/api/register-options`.

### Terminal 2 — frontend (Vite)

```bash
npm run dev:web
```

- Interface em **http://localhost:5173** (porta padrão do Vite).
- As requisições para **`/api`** são encaminhadas automaticamente para **http://localhost:3000** (configuração em `web/vite.config.ts`).

**Ordem sugerida:** inicie primeiro o servidor (terminal 1), depois o Vite (terminal 2).

### Atalho na raiz

```bash
npm run dev
```

Equivale a **`npm run dev --prefix server`** (apenas o backend). Para desenvolver a UI, use sempre **`npm run dev:web`** em paralelo.

## Build de produção (frontend)

Gera os arquivos em **`web/dist`**:

```bash
npm run build:web
```

Depois, com o servidor rodando **`npm run dev:server`** ou **`npm run start`** dentro de `server/`, o Express **detecta** `web/dist` e passa a servir o SPA React em **http://localhost:3000** (incluindo rotas do cliente, como `/ar`).

Se **`web/dist`** não existir, o servidor usa a pasta **`public/`**.

### Pré-visualizar o build sem Express

```bash
npm run preview:web
```

Serve o conteúdo de `web/dist` via Vite (útil para testar o bundle).

## Variáveis de ambiente (servidor)

Defina antes de iniciar o processo Node (exemplos abaixo; no **PowerShell** use `$env:VAR="valor"`).

| Variável | Descrição |
|----------|-----------|
| `PORT` | Porta do servidor (padrão: **3000**). |
| `HOST` | Interface de escuta (padrão: **0.0.0.0**). |
| `SERVE_STATIC` | `0` ou `false` — sobe **somente a API** (sem servir `web/dist`/`public`). Útil se você usar só o Vite na porta 5173 para a UI. |

**Porta em uso:** se aparecer erro de endereço já em uso, libere a porta ou use outra, por exemplo:

- Bash / Git Bash: `PORT=3010 npm run dev` (dentro da pasta `server`)
- Windows CMD: `set PORT=3010&& npm run dev`
- PowerShell: `$env:PORT="3010"; npm run dev`

(Execute esses comandos a partir da pasta **`server/`**, ou use `npm run dev --prefix server` na raiz com `PORT` definido no ambiente.)

## Scripts úteis (raiz do repositório)

| Comando | Ação |
|---------|------|
| `npm run dev:server` | Servidor Express com **node --watch** |
| `npm run dev:web` | Vite (desenvolvimento do React) |
| `npm run build:web` | Build de produção em `web/dist` |
| `npm run preview:web` | Preview do build com Vite |

## Lint (frontend)

```bash
cd web && npm run lint
```

## Resumo rápido

1. `cd web && npm install` e `cd server && npm install`
2. Terminal A: `npm run dev:server`
3. Terminal B: `npm run dev:web`
4. Abrir **http://localhost:5173** para desenvolver a interface com API em **:3000**

Para produção local após build: `npm run build:web` na raiz e em seguida subir o servidor; acessar **http://localhost:3000**.
