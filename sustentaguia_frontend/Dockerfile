FROM node:20
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps  # Instala as dependências, ignorando conflitos de peer dependencies
# REMOVA a linha "RUN npm install" daqui
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
