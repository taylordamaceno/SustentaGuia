const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const app = express();
const port = 3000;

const pool = new Pool({
  user: 'youruser',
  host: 'db',
  database: 'sustentaguia',
  password: 'yourpassword',
  port: 5432,
});
// Configuração do CORS
const corsOptions = {
  origin: 'http://localhost:3000',  // Seu frontend está aqui
  credentials: true,                // Se você estiver usando cookies ou autenticação baseada em sessões
  optionsSuccessStatus: 200         // Para compatibilidade com navegadores antigos
};
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`)
});

