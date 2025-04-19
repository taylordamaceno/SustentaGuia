const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3003;

// Configuração do CORS
app.use(cors({ origin: '*' }));
app.use(express.json());

// Rota de teste simples
app.get('/ping', (req, res) => {
  console.log('Recebido pedido para /ping');
  res.status(200).send('pong');
});

// Rota de teste JSON
app.post('/echo', (req, res) => {
  console.log('Recebido pedido para /echo:', JSON.stringify(req.body));
  res.status(200).json({
    message: 'Echo recebido com sucesso',
    data: req.body
  });
});

// Iniciar o servidor
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor simples rodando em http://0.0.0.0:${PORT}`);
}); 