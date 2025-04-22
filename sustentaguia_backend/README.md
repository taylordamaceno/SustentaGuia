# Backend do SustentaGuia

Este é o backend da aplicação SustentaGuia, responsável por gerenciar a autenticação de usuários, módulos de aprendizado e progresso dos usuários.

## Requisitos

- Node.js 16+
- PostgreSQL 13+
- Docker e Docker Compose (para desenvolvimento)

## Configuração de Segurança para Autenticação Google

Para habilitar o login com Google, siga estas etapas:

1. Crie um projeto no [Google Cloud Console](https://console.cloud.google.com/)
2. Configure a tela de consentimento OAuth
3. Crie credenciais OAuth 2.0 para aplicativo Web
4. Adicione URLs autorizadas de redirecionamento:
   - `http://localhost:3000` (para desenvolvimento)
   - `https://seu-dominio.com` (para produção)
5. Copie o Client ID gerado e configure no arquivo `.env`:

```
GOOGLE_CLIENT_ID=seu_client_id_aqui
```

## Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```
# Configurações do banco de dados
DATABASE_URL=postgres://postgres:postgres@db:5432/sustentaguia

# Chave secreta para JWT (deve ser uma string longa e aleatória em produção)
SECRET_KEY=sua_chave_secreta_aqui

# Configuração do Google OAuth
GOOGLE_CLIENT_ID=seu_client_id_aqui

# Configurações do servidor
PORT=3001
NODE_ENV=development
```

## Executando a Migração do Banco de Dados

Para aplicar as alterações de esquema para suporte à autenticação Google em um banco de dados existente:

```bash
# Com Docker Compose
docker exec -it sustentaguia-db-1 psql -U postgres -d sustentaguia -f /docker-entrypoint-initdb.d/migrate_auth.sql

# Sem Docker
psql -U postgres -d sustentaguia -f ./db_scripts/migrate_auth.sql
```

## Rodando o Servidor

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Produção
npm start
```

## Segurança na Autenticação Google

O sistema implementa as seguintes verificações de segurança:

1. Validação do token ID com a biblioteca oficial google-auth-library
2. Verificação do e-mail (apenas emails verificados pelo Google são aceitos)
3. Armazenamento seguro do Client ID em variáveis de ambiente
4. Tokens JWT incluem o tipo de autenticação para controle adicional
5. Atualização automática de dados do usuário quando mudanças são detectadas no Google

## Endpoints de Autenticação

- `POST /register` - Registro tradicional com email/senha
- `POST /login` - Login tradicional com email/senha
- `POST /auth/google` - Login com Google
- `POST /logout` - Logout (apenas client-side) 