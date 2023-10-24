const express = require('express');
const router = express.Router();
const { getUserProgress } = require('../models/userProgress');

router.get('/:userId', async (req, res) => {
    try {
        const progress = await getUserProgress(req.params.userId);
        res.json(progress.rows);
    } catch (error) {
        console.error("Erro ao buscar progresso do usuário:", error);
        res.status(500).send({ error: error.message });
    }
});

// Adicione outras rotas relacionadas ao progresso do usuário aqui.

module.exports = router;

