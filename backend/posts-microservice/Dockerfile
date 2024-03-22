FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm install -g nodemon
RUN npm install mongoose

COPY . .

COPY models ./models

EXPOSE 5002

CMD ["nodemon", "postMicroservice.js"]