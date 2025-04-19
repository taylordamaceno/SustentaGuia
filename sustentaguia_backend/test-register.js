const express = require('express');
const bcrypt = require('bcrypt');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const PORT = 3002;

// Configuração do CORS para aceitar qualquer origem
app.use(cors({ origin: '*', credentials: true }));
app.use(express.json());

// Conexão com o banco
const pool = new Pool({
  user: 'postgres',
  host: 'db',
  database: 'sustentaguia',
  password: 'postgres',
  port: 5432,
});

// Rota de teste simples
app.get('/ping', (req, res) => {
  res.status(200).send('pong');
});

// Rota de registro simplificada
app.post('/register', async (req, res) => {
  console.log('Recebido request para /register:', req.body);
  
  try {
    const { name, email, password } = req.body;
    
    if (!name || !email || !password) {
      console.log('Dados incompletos:', { name, email, password: password ? '***' : undefined });
      return res.status(400).json({ error: 'Dados incompletos. Forneça nome, email e senha.' });
    }
    
    // Gerar hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Hash gerado para senha');
    
    try {
      // Inserir usuário no banco
      const result = await pool.query(
        'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id',
        [name, email, hashedPassword]
      );
      
      console.log('Usuário inserido com sucesso:', result.rows[0]);
      res.status(201).json({ 
        message: 'Usuário registrado com sucesso!',
        userId: result.rows[0].id
      });
    } catch (dbError) {
      console.error('Erro no banco de dados:', dbError.message);
      
      // Verificar erro de duplicidade
      if (dbError.code === '23505') {
        return res.status(409).json({ error: 'E-mail já está em uso.' });
      }
      
      res.status(500).json({ error: 'Erro ao registrar usuário no banco de dados.' });
    }
  } catch (error) {
    console.error('Erro geral:', error.message);
    res.status(500).json({ error: 'Erro interno ao processar requisição.' });
  }
});

// Iniciar o servidor
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor de teste rodando em http://0.0.0.0:${PORT}`);
}); 