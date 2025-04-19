# Estágio de build - usa uma imagem mais leve do Node.js
FROM node:20-alpine AS builder
WORKDIR /app

# Instalação de dependências necessárias
RUN apk add --no-cache python3 make g++ curl

# Remover qualquer lock file do pnpm
RUN rm -f pnpm-lock.yaml

# Otimização de cache para node_modules
COPY package.json ./

# Preparar pasta para cache do SWC
RUN mkdir -p /root/.cache/next-swc

# Configurar para usar a versão musl do SWC para Alpine Linux
ENV NEXT_TELEMETRY_DISABLED=1
ENV npm_config_target_arch=x64
ENV npm_config_target_platform=linux
ENV npm_config_build_from_source=true
ENV NEXT_SKIP_NATIVE_POSTINSTALL=true

# Instalando dependências
RUN npm install --legacy-peer-deps

# Copiando o restante do código fonte
COPY . .
# Remover pnpm lock se existir no código fonte
RUN rm -f pnpm-lock.yaml

# Ajustar o permissionamento para construir o projeto
RUN chmod -R 777 /root/.cache

# Construindo o aplicativo 
RUN npm run build

# Estágio de produção - usa uma imagem mais leve
FROM node:20-alpine AS runner
WORKDIR /app

# Configurando variáveis de ambiente para produção
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Copiando apenas os arquivos necessários para execução
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

# Expondo a porta
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
