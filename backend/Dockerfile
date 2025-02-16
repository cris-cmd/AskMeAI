# syntax=docker/dockerfile:1
FROM node:20 AS app

WORKDIR /usr/src/app

COPY package*.json ./  
RUN npm install --production

COPY . .  

RUN npm run build  

CMD ["node", "dist/main.js"]