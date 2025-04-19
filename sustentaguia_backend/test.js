const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'db',
  database: 'sustentaguia',
  password: 'postgres',
  port: 5432,
});

async function testConnection() {
  try {
    console.log('Tentando conectar ao banco de dados...');
    const result = await pool.query('SELECT 1');
    console.log('Conexão bem-sucedida!', result.rows);
    
    // Verificar se a tabela users existe
    try {
      const tables = await pool.query("SELECT * FROM pg_catalog.pg_tables WHERE schemaname = 'public'");
      console.log('Tabelas disponíveis:', tables.rows.map(row => row.tablename));
      
      // Tentar criar a tabela users se não existir
      await pool.query(`
        CREATE TABLE IF NOT EXISTS users (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email VARCHAR(255) UNIQUE NOT NULL,
          password VARCHAR(255) NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `);
      console.log('Tabela users verificada/criada com sucesso!');
    } catch (err) {
      console.error('Erro ao verificar tabelas:', err);
    }
  } catch (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } finally {
    process.exit(0);
  }
}

testConnection(); 