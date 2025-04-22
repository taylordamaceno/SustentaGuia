const express = require('express');
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
    origin: function(origin, callback) {
        // Permitir requisições sem origin (como apps mobile ou curl)
        if (!origin) return callback(null, true);
        
        // Lista de origens permitidas
        const allowedOrigins = [
            'http://localhost:3000',
            /^http:\/\/192\.168\.0\.\d+:3000$/  // Qualquer IP na faixa 192.168.0.x porta 3000
        ];
        
        // Verifica se a origem está na lista ou corresponde ao padrão regex
        const allowed = allowedOrigins.some(allowedOrigin => {
            if (allowedOrigin instanceof RegExp) {
                return allowedOrigin.test(origin);
            }
            return allowedOrigin === origin;
        });
        
        if (allowed) {
            callback(null, true);
        } else {
            callback(new Error('Não permitido por CORS'));
        }
    },
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

// Rota de registro (SEM bcrypt para evitar problemas)
app.post('/register', async (req, res) => {
    console.log('Recebido request para /register:', JSON.stringify(req.body));
    try {
        const { name, email, password } = req.body;
        console.log('Dados recebidos:', { name, email, passwordLength: password ? password.length : 0 });
        
        if (!name || !email || !password) {
            console.log('Dados incompletos');
            return res.status(400).send({ error: 'Dados incompletos. Forneça nome, email e senha.' });
        }
        
        // Usando um método simples em vez de bcrypt
        const hashedPassword = 'senha_' + password;
        console.log('Hash simulado para senha criado');
        
        console.log('Inserindo no banco de dados...');
        const result = await db.query(
            'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id',
            [name, email, hashedPassword]
        );
        console.log('Usuário inserido com sucesso. ID:', result.rows[0].id);
        
        console.log('Enviando resposta de sucesso');
        return res.status(201).send({ message: 'Usuário registrado com sucesso!' });
    } catch (error) {
        console.error("Erro ao registrar usuário:", error);
        
        if (error.code === '23505') {
            console.log('Email já está em uso');
            return res.status(409).send({ error: 'Email já está em uso.' });
        }
        
        console.log('Enviando resposta de erro');
        return res.status(500).send({ error: 'Erro interno ao registrar usuário. Por favor, tente novamente.' });
    }
});

// Rota de login (também sem bcrypt)
app.post('/login', async (req, res) => {
    console.log('Recebido request para /login:', JSON.stringify(req.body));
    try {
        const { email, password } = req.body;
        console.log('Buscando usuário com email:', email);
        
        const user = (await db.query('SELECT * FROM users WHERE email = $1', [email])).rows[0];
        if (!user) {
            console.log('Usuário não encontrado');
            return res.status(404).send({ error: 'Usuário não encontrado.' });
        }

        // Comparação simples sem bcrypt
        const isValid = user.password === 'senha_' + password;
        if (!isValid) {
            console.log('Senha inválida');
            return res.status(401).send({ error: 'Senha inválida.' });
        }

        console.log('Gerando token para usuário ID:', user.id);
        const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: '1h' });
        console.log('Token gerado com sucesso');
        
        return res.send({ message: 'Login bem-sucedido!', token });
    } catch (error) {
        console.error("Erro ao logar usuário:", error);
        return res.status(500).send({ error: 'Erro interno ao realizar login. Por favor, tente novamente.' });
    }
});

// Rota de autenticação com Google
app.post('/auth/google', async (req, res) => {
    console.log('Recebido request para /auth/google:', JSON.stringify(req.body));
    try {
        const { token } = req.body;
        
        if (!token) {
            console.log('Token do Google não fornecido');
            return res.status(400).send({ error: 'Token do Google não fornecido.' });
        }
        
        // Em um caso real, você usaria a biblioteca google-auth-library para validar o token
        // e extrair as informações do usuário, como no exemplo abaixo:
        /*
        const { OAuth2Client } = require('google-auth-library');
        const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID,
        });
        const payload = ticket.getPayload();
        const email = payload.email;
        const name = payload.name;
        */
        
        // Para fins de demonstração, vamos simular a validação do token
        // e extrair as informações do usuário:
        const email = `google_user_${Date.now()}@example.com`;
        const name = `Google User ${Date.now()}`;
        
        console.log('Informações do usuário do Google:', { email, name });
        
        // Verificar se o usuário já existe
        let user = (await db.query('SELECT * FROM users WHERE email = $1', [email])).rows[0];
        
        if (!user) {
            // Criar um novo usuário se não existir
            console.log('Usuário não existe, criando novo usuário...');
            // Note que estamos criando um usuário sem senha (usando null ou uma string especial)
            const result = await db.query(
                'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id',
                [name, email, 'google_auth_user']
            );
            
            user = {
                id: result.rows[0].id,
                name,
                email
            };
            
            console.log('Usuário do Google criado com sucesso. ID:', user.id);
        } else {
            console.log('Usuário do Google já existe. ID:', user.id);
        }
        
        // Gerar token JWT
        const jwtToken = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: '1h' });
        console.log('Token JWT gerado com sucesso');
        
        return res.send({ 
            message: 'Login com Google bem-sucedido!', 
            token: jwtToken,
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        console.error("Erro ao autenticar com Google:", error);
        return res.status(500).send({ error: 'Erro interno ao autenticar com Google. Por favor, tente novamente.' });
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
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando em http://0.0.0.0:${PORT}`);
}); 