const { Pool } = require('pg');

const pool = new Pool({
  user: 'youruser',
  host: 'db',
  database: 'sustentaguia',
  password: 'yourpassword',
  port: 5432,
});

module.exports = pool;
