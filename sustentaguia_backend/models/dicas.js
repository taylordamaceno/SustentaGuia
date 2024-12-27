const db = require('../database'); // Importa a conexão com o banco

// Função para buscar todas as dicas
const getDicas = async () => {
    const result = await db.query('SELECT * FROM dicas'); // Ajuste o nome da tabela se necessário
    return result.rows; // Retorna as linhas do resultado
};

// Outras funções relacionadas a dicas podem ser adicionadas aqui, se necessário

module.exports = {
    getDicas, // Exporta a função getDicas
};
