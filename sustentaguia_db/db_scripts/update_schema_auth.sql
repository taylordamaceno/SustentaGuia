-- Adicionar novas colunas à tabela users para suporte ao login social

-- Adicionar coluna para armazenar o tipo de autenticação
ALTER TABLE users 
ADD COLUMN IF NOT EXISTS auth_type VARCHAR(50) DEFAULT 'local';

-- Adicionar coluna para armazenar o ID do Google
ALTER TABLE users 
ADD COLUMN IF NOT EXISTS google_id VARCHAR(255) UNIQUE;

-- Adicionar coluna para armazenar a URL da foto de perfil
ALTER TABLE users 
ADD COLUMN IF NOT EXISTS picture_url TEXT;

-- Adicionar índice para melhorar a performance de busca por auth_type
CREATE INDEX IF NOT EXISTS idx_users_auth_type ON users(auth_type);

-- Adicionar índice para melhorar a performance de busca por email
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);

-- Modificar a constraint de NOT NULL na coluna password para permitir usuários sem senha
-- (Isso só seria necessário se a coluna password fosse NOT NULL, mas como já é NULLABLE, 
-- não precisamos fazer essa alteração)

COMMENT ON COLUMN users.auth_type IS 'Tipo de autenticação: local (senha) ou google';
COMMENT ON COLUMN users.google_id IS 'ID único do usuário no Google';
COMMENT ON COLUMN users.picture_url IS 'URL da foto de perfil do usuário'; 