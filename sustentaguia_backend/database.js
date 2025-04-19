const { Pool } = require('pg');

// Use a variável de ambiente DATABASE_URL se disponível, caso contrário, use configurações padrão
const connectionString = process.env.DATABASE_URL;

const pool = connectionString
  ? new Pool({ connectionString })
  : new Pool({
      user: 'postgres',
      host: 'db',
      database: 'sustentaguia',
      password: 'postgres',
      port: 5432,
    });

module.exports = pool;
