const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'sustentaguiadb',
    password: 'SustentaGuia@2024',
    port: 5432,
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};

