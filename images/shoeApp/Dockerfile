FROM node:18.18.2-buster-slim

WORKDIR /usr/app

COPY package*.json .

RUN npm install --quiet

COPY ./ ./

CMD ["npm", "run", "dev"]