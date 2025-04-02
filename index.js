// Teste de atualização
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Bot WhatsApp rodando!');
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
