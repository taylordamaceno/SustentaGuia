const db = require('../database');

const getUserProgress = async (userId) => {
    return await db.query('SELECT * FROM user_progress WHERE user_id = $1', [userId]);
};

// Aqui você pode adicionar outras funções relacionadas ao progresso do usuário.

module.exports = {
    getUserProgress
};

