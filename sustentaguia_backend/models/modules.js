const express = require('express');
const router = express.Router();
const { getModules } = require('../models/modules');
const { getDicas } = require('../models/dicas'); // Importa o modelo de dicas

// Rota para buscar módulos
router.get('/', async (req, res) => {
    try {
        const modules = await getModules();
        res.json(modules.rows);
    } catch (error) {
        console.error("Erro ao buscar módulos:", error);
        res.status(500).send({ error: error.message });
    }
});

// Rota para buscar dicas
router.get('/dicas', async (req, res) => {
    try {
        const dicas = await getDicas(); // Busca as dicas do banco de dados
        res.json(dicas); // Retorna as dicas como JSON
    } catch (error) {
        console.error("Erro ao buscar dicas:", error);
        res.status(500).send({ error: error.message });
    }
});

module.exports = router;