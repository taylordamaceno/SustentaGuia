const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3000;

const pool = new Pool({
  user: 'youruser',
  host: 'db',
  database: 'sustentaguia',
  password: 'yourpassword',
  port: 5432,
});

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`)
});

