FROM node:16-alpine
WORKDIR /app

# Instalando ferramentas de compilação necessárias para o bcrypt
RUN apk add --no-cache python3 make g++ build-base

# Copiando apenas os arquivos de configuração para melhor uso de cache
COPY package*.json ./

# Instalando apenas dependências de produção
RUN npm install --only=production

# Copiando o restante do código
COPY . .

# Configurando para produção
ENV NODE_ENV=production

# Garantir que as permissões estejam corretas
RUN chmod +x index.js

# Expondo a porta explicitamente
EXPOSE 3001

# Comando para iniciar o aplicativo (com a porta 0.0.0.0 diretamente)
CMD ["node", "index.js"]
