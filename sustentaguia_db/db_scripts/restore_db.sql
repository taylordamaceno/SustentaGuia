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

-- Tabela de dicas
CREATE TABLE dicas (
    id SERIAL PRIMARY KEY,
    dica TEXT NOT NULL
);

-- Inserção de 20 dicas
INSERT INTO dicas (dica) VALUES
('Desligue aparelhos da tomada quando não estiverem em uso.'),
('Use transporte público ou carona compartilhada.'),
('Opte por produtos com menos embalagens.'),
('Evite imprimir documentos desnecessários.'),
('Plante árvores ou cuide de um jardim.'),
('Compre alimentos orgânicos de produtores locais.'),
('Reduza o consumo de carne e opte por refeições vegetarianas.'),
('Leve sua própria sacola ao mercado.'),
('Reutilize garrafas de água e evite plásticos descartáveis.'),
('Doe roupas e objetos que não utiliza mais.'),
('Troque lâmpadas incandescentes por LED.'),
('Evite comprar fast fashion; opte por roupas de qualidade.'),
('Use aplicativos para economizar água e energia.'),
('Recicle lixo eletrônico adequadamente.'),
('Crie uma composteira para resíduos orgânicos.'),
('Prefira bicicletas para pequenos trajetos.'),
('Apoie iniciativas de preservação ambiental.')
ON CONFLICT DO NOTHING;

COMMIT;

