const express = require('express');
const router = express.Router();
const { getModules } = require('../models/modules');

router.get('/', async (req, res) => {
    try {
        const modules = await getModules();
        res.json(modules.rows);
    } catch (error) {
        console.error("Erro ao buscar módulos:", error);
        res.status(500).send({ error: error.message });
    }
});

// Adicione outras rotas relacionadas aos módulos aqui.

module.exports = router;

