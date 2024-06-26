-- restore_db.sql
BEGIN;

-- Tabela de usuários
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de módulos
CREATE TABLE modules (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    icon_path VARCHAR(255),  -- caminho para o ícone do módulo (se estiver armazenando localmente)
    order_position INTEGER NOT NULL  -- para ordenar os módulos na exibição
);

-- Tabela de progresso do usuário
CREATE TABLE user_progress (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    module_id INTEGER REFERENCES modules(id),
    is_completed BOOLEAN DEFAULT FALSE,  -- se o módulo foi concluído pelo usuário
    quizzes_passed INTEGER DEFAULT 0,   -- número de quizzes passados no módulo
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP  -- última vez que o progresso foi atualizado
);

COMMIT;

