const db = require('../database');

const getModules = async () => {
    return await db.query('SELECT * FROM modules ORDER BY order_position');
};

// Aqui você pode adicionar outras funções relacionadas aos módulos.

module.exports = {
    getModules
};

