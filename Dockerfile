FROM node:14-alpine
ADD ./db/init.sql /docker-entrypoint-initdb.d/

# Diretorio da aplicação dentro do container
WORKDIR /usr/app

# Copiando o package json e yarn lock para poder instalar as dependencias
COPY package.json ./
# Executando a instalação do query builder
RUN npm install knex -g
# Executando a instalação dos pacotes
RUN yarn install

# Copiando o restante dos arquivos
COPY . .
