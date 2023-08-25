FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

ENV MONGO_URI="mongodb+srv://Amjath137:ammunotesmongo@cluster0.cocyysy.mongodb.net/"

EXPOSE 4000

CMD ["npm" , "start"]