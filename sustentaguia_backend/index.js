// Carregar as variáveis de ambiente (.env)
require('dotenv').config();

const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const db = require('./database'); // Importa o pool de conexão com o banco de dados
const modulesRoutes = require('./routes/modules');
const userProgressRoutes = require('./routes/userProgress');
const { getDicas } = require('./models/dicas');

const app = express();
const path = require('path');
const PORT = process.env.PORT || 3001;
const SECRET_KEY = process.env.SECRET_KEY || "default_secret_key";

// Avisar se estiver usando a chave padrão (insegura)
if (SECRET_KEY === "default_secret_key") {
    console.warn("AVISO DE SEGURANÇA: Usando chave secreta padrão. Configure SECRET_KEY no arquivo .env para produção!");
}

// Verificar se GOOGLE_CLIENT_ID está configurado
if (!process.env.GOOGLE_CLIENT_ID) {
    console.warn("AVISO DE CONFIGURAÇÃO: GOOGLE_CLIENT_ID não configurado. A autenticação Google pode não funcionar corretamente.");
}

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
        
        // Validação do token usando google-auth-library
        const { OAuth2Client } = require('google-auth-library');
        
        // O Client ID deve ser armazenado em variável de ambiente
        const CLIENT_ID = process.env.GOOGLE_CLIENT_ID || 'SEU_CLIENT_ID_AQUI';
        
        try {
            const client = new OAuth2Client(CLIENT_ID);
            const ticket = await client.verifyIdToken({
                idToken: token,
                audience: CLIENT_ID, // Verificar se o token foi emitido para nossa aplicação
            });
            
            const payload = ticket.getPayload();
            
            // Verificar se o email foi verificado pelo Google
            if (!payload.email_verified) {
                console.log('Email não verificado pelo Google');
                return res.status(401).send({ 
                    error: 'Seu email não foi verificado pelo Google. Por favor, verifique seu email antes de continuar.' 
                });
            }
            
            const userId = payload.sub; // ID único do usuário no Google
            const email = payload.email;
            const name = payload.name;
            const picture = payload.picture; // URL da foto do perfil
            
            console.log('Token validado com sucesso. Informações do usuário:', { 
                userId, 
                email, 
                name,
                email_verified: payload.email_verified 
            });
            
            // Verificar se o usuário já existe
            let user = (await db.query('SELECT * FROM users WHERE email = $1', [email])).rows[0];
            
            if (!user) {
                // Criar um novo usuário se não existir
                console.log('Usuário não existe, criando novo usuário...');
                
                // Criamos com um valor especial para a senha indicando que é um usuário Google
                // e não pode fazer login com senha
                const result = await db.query(
                    'INSERT INTO users (name, email, password, auth_type, google_id, picture_url) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id',
                    [name, email, 'GOOGLE_AUTH_USER', 'google', userId, picture]
                );
                
                user = {
                    id: result.rows[0].id,
                    name,
                    email,
                    auth_type: 'google',
                    picture_url: picture
                };
                
                console.log('Usuário do Google criado com sucesso. ID:', user.id);
            } else {
                // Atualiza os dados do usuário caso tenha mudado no Google
                await db.query(
                    'UPDATE users SET name = $1, google_id = $2, picture_url = $3, auth_type = $4, updated_at = CURRENT_TIMESTAMP WHERE id = $5',
                    [name, userId, picture, 'google', user.id]
                );
                
                console.log('Usuário do Google atualizado. ID:', user.id);
            }
            
            // Gerar token JWT
            const jwtToken = jwt.sign({ id: user.id, auth_type: 'google' }, SECRET_KEY, { expiresIn: '1h' });
            console.log('Token JWT gerado com sucesso');
            
            return res.send({ 
                message: 'Login com Google bem-sucedido!', 
                token: jwtToken,
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    auth_type: 'google',
                    picture_url: user.picture_url
                }
            });
            
        } catch (verificationError) {
            console.error("Erro ao verificar token do Google:", verificationError);
            return res.status(401).send({ error: 'Token do Google inválido ou expirado.' });
        }
        
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