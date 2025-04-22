-- Script de migração para adicionar suporte a login social
-- Este script pode ser executado em um banco existente para adicionar as novas funcionalidades

BEGIN;

-- Verificar se as colunas já existem antes de tentar adicioná-las
DO $$
BEGIN
    -- Verificar se a coluna auth_type já existe
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'users' AND column_name = 'auth_type'
    ) THEN
        -- Adicionar coluna para armazenar o tipo de autenticação
        ALTER TABLE users ADD COLUMN auth_type VARCHAR(50) DEFAULT 'local';
        -- Atualizar registros existentes para usar auth_type 'local'
        UPDATE users SET auth_type = 'local';
    END IF;

    -- Verificar se a coluna google_id já existe
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'users' AND column_name = 'google_id'
    ) THEN
        -- Adicionar coluna para armazenar o ID do Google
        ALTER TABLE users ADD COLUMN google_id VARCHAR(255) UNIQUE;
    END IF;

    -- Verificar se a coluna picture_url já existe
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'users' AND column_name = 'picture_url'
    ) THEN
        -- Adicionar coluna para armazenar a URL da foto de perfil
        ALTER TABLE users ADD COLUMN picture_url TEXT;
    END IF;
END $$;

-- Adicionar índices para melhorar a performance de busca (se ainda não existirem)
CREATE INDEX IF NOT EXISTS idx_users_auth_type ON users(auth_type);
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);

-- Adicionar comentários para documentação
COMMENT ON COLUMN users.auth_type IS 'Tipo de autenticação: local (senha) ou google';
COMMENT ON COLUMN users.google_id IS 'ID único do usuário no Google';
COMMENT ON COLUMN users.picture_url IS 'URL da foto de perfil do usuário';

-- Log da migração
CREATE TABLE IF NOT EXISTS migrations (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Registrar esta migração
INSERT INTO migrations (name) VALUES ('add_google_auth_support')
ON CONFLICT DO NOTHING;

COMMIT;

-- Mostrar status da migração
SELECT * FROM migrations WHERE name = 'add_google_auth_support'; 