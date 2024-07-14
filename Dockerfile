FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

COPY .env .env

EXPOSE 3000

CMD [ "npm", "run", "dev" ]

docker run -d -p 80:8080 harshitkar/my-nodejs-app:latest
