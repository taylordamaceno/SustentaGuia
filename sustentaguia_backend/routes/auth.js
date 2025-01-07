const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// Registro de usuário
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ username, password: hashedPassword });
        res.status(201).json({ message: 'Usuário registrado com sucesso', user: newUser });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao registrar usuário' });
    }
});

// Login de usuário
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ where: { username } });
        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Senha inválida' });
        }
        const token = jwt.sign({ id: user.id }, 'seu_segredo', { expiresIn: '1h' });
        res.json({ message: 'Login bem-sucedido', token });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao realizar login' });
    }
});

module.exports = router;
