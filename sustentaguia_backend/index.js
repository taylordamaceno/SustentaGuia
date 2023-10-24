const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors'); // Importar o CORS
const db = require('./database');

const app = express();
const PORT = 5000;
const SECRET_KEY = "90b7f602d68080c1571d9370b8b8683210595d2bc05677fabedaa61c78fa2a7d";

app.use(express.json());
app.use(cors()); // Adicionar o middleware CORS

app.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);
        await db.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)', [name, email, hashedPassword]);

        res.status(201).send({ message: 'User registered successfully!' });
    } catch (error) {
        console.error("Erro ao registrar usuário:", error); // Log detalhado no backend
        res.status(500).send({ error: error.message });
    }
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = (await db.query('SELECT * FROM users WHERE email = $1', [email])).rows[0];
        if (!user) return res.status(404).send({ error: 'User not found' });

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) return res.status(401).send({ error: 'Invalid password' });

        const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: '1h' });
        res.send({ message: 'Logged in successfully!', token });
    } catch (error) {
        console.error("Erro ao logar usuário:", error); // Log detalhado no backend
        res.status(500).send({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
