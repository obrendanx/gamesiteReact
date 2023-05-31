FROM node:16-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package*.json ./app

RUN npm install

COPY . /app

EXPOSE 3000
RUN npm install
CMD ["npm","run", "docker-start"]