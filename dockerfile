FROM node:18-alpine

WORKDIR /usr/src/front

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000/tcp

CMD ["npm", "start"]