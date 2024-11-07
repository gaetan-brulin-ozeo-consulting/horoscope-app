FROM node:lts-alpine

ENV PORT=3000

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY index.js .
COPY src/ src/

EXPOSE 3000

CMD [ "node", "index.js" ]
