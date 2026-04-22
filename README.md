# Esgi KING

A Node.JS API to manage orders of plates. With your phone, terminal or online.

# How to run it ?

1. docker compose up -d
2. npm run start

# How to get the starter dataset

1. (docker compose up -d)
2. npm run dataset

# How to shutdown the database

docker compose down -v

# How to install it ? 

## Node.JS

1. Have Node.JS on your computer
2. npm install 
3. npm install mongoose
npm install -D @types/mongoose @types/express
npm install dotenv
npm install -D ts-node
4. npm run build

## Mongo DB

1. Start Docker Desktop
2. docker compose -f docker-compose.yml pull
3. docker compose -f docker-compose.yml up -d
4. npm run seed

# Dataset connection URL

mongodb://esgi:igse@localhost:22222/?authSource=admin