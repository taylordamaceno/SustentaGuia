const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const PORT = 3001;

// Configuração do CORS
const corsOptions = {
  origin: '*',
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

const pool = new Pool({
  user: 'postgres',
  host: 'db',
  database: 'sustentaguia',
  password: 'postgres',
  port: 5432,
});

// Rota de saúde (health check)
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Rota de teste para o banco de dados
app.get('/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT 1');
    res.json({ message: 'Conexão com o banco de dados OK', data: result.rows });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota simples de teste
app.post('/test-register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    res.status(200).json({ 
      message: 'Teste de registro recebido com sucesso!',
      data: { name, email, passwordLength: password ? password.length : 0 }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Inicia o servidor
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor de teste rodando em http://0.0.0.0:${PORT}`);
}); 