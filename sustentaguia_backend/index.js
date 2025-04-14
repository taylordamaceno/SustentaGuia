const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const db = require('./database'); // Importa o pool de conexão com o banco de dados
const modulesRoutes = require('./routes/modules');
const userProgressRoutes = require('./routes/userProgress');
const { getDicas } = require('./models/dicas');

const app = express();
const path = require('path');
const PORT = 3001;
const SECRET_KEY = process.env.SECRET_KEY || "default_secret_key";

// Verifica a conexão com o banco de dados
(async () => {
    try {
        console.log("Conectando ao banco de dados em:", process.env.DATABASE_URL);
        await db.query('SELECT 1'); // Testa a conexão
        console.log("Conexão ao banco de dados bem-sucedida.");
    } catch (error) {
        console.error("Erro ao conectar ao banco de dados:", error.message);
    }
})();

// Configuração do CORS
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Rotas principais
app.use('/api/modules', modulesRoutes);
app.use('/api/userProgress', userProgressRoutes);

// Rota para dicas
app.get('/api/dicas', async (req, res) => {
    try {
        const dicas = await getDicas();
        res.json(dicas);
    } catch (error) {
        console.error('Erro ao buscar dicas:', error);
        res.status(500).send({ error: error.message });
    }
});

// Middleware de autenticação
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(401).send({ error: 'Token não fornecido. Por favor, faça login.' });

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.status(403).send({ error: 'Token inválido ou expirado.' });
        req.user = user;
        next();
    });
}

// Rota de registro
app.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        await db.query(
            'INSERT INTO users (name, email, password) VALUES ($1, $2, $3)',
            [name, email, hashedPassword]
        );
        res.status(201).send({ message: 'Usuário registrado com sucesso!' });
    } catch (error) {
        console.error("Erro ao registrar usuário:", error.message);
        res.status(500).send({ error: 'Erro interno ao registrar usuário. Por favor, tente novamente.' });
    }
});

// Rota de login
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = (await db.query('SELECT * FROM users WHERE email = $1', [email])).rows[0];
        if (!user) return res.status(404).send({ error: 'Usuário não encontrado.' });

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) return res.status(401).send({ error: 'Senha inválida.' });

        const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: '1h' });
        res.send({ message: 'Login bem-sucedido!', token });
    } catch (error) {
        console.error("Erro ao logar usuário:", error.message);
        res.status(500).send({ error: 'Erro interno ao realizar login. Por favor, tente novamente.' });
    }
});

// Rota de logout
app.post('/logout', (req, res) => {
    // Não há necessidade de ações no servidor com JWT
    res.send({ message: 'Logout bem-sucedido! Por favor, remova o token no cliente.' });
});


// Rota protegida de exemplo
app.get('/dashboard', authenticateToken, (req, res) => {
    res.send({ message: `Bem-vindo ao dashboard, usuário ID ${req.user.id}!` });
});

// Rota de saúde (health check)
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
