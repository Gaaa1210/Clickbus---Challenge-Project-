const express = require('express');
const { generateRegistrationOptions, verifyRegistrationResponse } = require('@simplewebauthn/server');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public')); // Serve seu HTML automaticamente

// Banco de dados em memória (para o protótipo)
const users = {
    "lucas.silva@exemplo.com": {
        id: 'user_123',
        username: "lucas.silva@exemplo.com",
        devices: [] // Aqui salvaremos a chave pública do seu FaceID/Digital
    }
};

const rpID = 'localhost'; // Identificador do seu "servidor"
const expectedOrigin = `http://localhost:3000`;

// Rota 1: Gerar opções para o celular criar a biometria
app.post('/api/register-options', (req, res) => {
    const user = users["lucas.silva@exemplo.com"];
    
    const options = generateRegistrationOptions({
        rpName: 'ClickBus Smart Journey',
        rpID,
        userID: user.id,
        userName: user.username,
        attestationType: 'none',
        authenticatorSelection: {
            residentKey: 'preferred',
            userVerification: 'preferred', // Aqui ele pede FaceID/Digital
            authenticatorAttachment: 'platform', // Garante que use o sensor do celular/mac
        },
    });

    // Salva o desafio temporariamente para conferir depois
    user.currentChallenge = options.challenge;
    res.json(options);
});

app.listen(3000, () => {
    console.log('Rodando em http://localhost:3000');
});