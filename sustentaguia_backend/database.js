const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'sustenguiadb',
    password: 'SustentaGuia@2023',
    port: 5432,
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};

