# Use a imagem oficial do Node.js
FROM node:22

# Defina o diretório de trabalho
WORKDIR /usr/src/app

# Copie o package.json e o package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código
COPY . .

# Exponha a porta em que a aplicação vai rodar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "start:dev"]
