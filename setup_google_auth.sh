#!/bin/bash

# Script para configurar a autenticação Google no SustentaGuia
echo "Iniciando configuração da autenticação Google para SustentaGuia..."

# 1. Copiar o script de migração para o container do banco de dados
echo "Copiando script de migração para o banco de dados..."
docker cp sustentaguia_db/db_scripts/migrate_auth.sql sustentaguia-db-1:/docker-entrypoint-initdb.d/

# 2. Executar a migração no banco de dados
echo "Aplicando migração do banco de dados..."
docker exec -it sustentaguia-db-1 psql -U postgres -d sustentaguia -f /docker-entrypoint-initdb.d/migrate_auth.sql

# 3. Copiar o arquivo index.js atualizado para o backend
echo "Atualizando o backend com suporte à autenticação Google..."
docker cp sustentaguia_backend/index.js sustentaguia-backend-1:/app/

# 4. Instalar a biblioteca google-auth-library no container backend
echo "Instalando biblioteca google-auth-library no backend..."
docker exec -it sustentaguia-backend-1 npm install google-auth-library

# 5. Copiar o arquivo .env para o backend
echo "Configurando variáveis de ambiente..."
docker cp sustentaguia_backend/.env sustentaguia-backend-1:/app/

# 6. Reiniciar o backend para aplicar as mudanças
echo "Reiniciando o backend..."
docker-compose restart backend

# 7. Instruções para o Google Client ID
echo ""
echo "==================== CONFIGURAÇÃO CONCLUÍDA ===================="
echo "Para completar a configuração, você precisa:"
echo ""
echo "1. Obter um Client ID Google em: https://console.cloud.google.com/"
echo "2. Configure o Client ID em sustentaguia_backend/.env"
echo "3. Configure o mesmo Client ID em sustentaguia_frontend/src/App.js"
echo ""
echo "Depois disso, reinicie os containers com: docker-compose restart"
echo "================================================================" 