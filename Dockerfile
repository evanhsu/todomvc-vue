FROM node:10

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "PORT=8080", "node", "server.js" ]