FROM node:alpine

WORKDIR /timer-service

COPY ./timer-service/package.json ./

RUN npm install --ignore-scripts

COPY ./timer-service .

RUN npm run build

ENV TZ=Europe/Paris

EXPOSE 4002

USER node

CMD ["npm", "run", "dev"]
