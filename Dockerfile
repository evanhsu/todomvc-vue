FROM node:10

WORKDIR /app

COPY public/package*.json ./public/
RUN cd public && npm install && cd ..

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8080

CMD [ "node", "server.js" ]