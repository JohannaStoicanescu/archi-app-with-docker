FROM node:alpine

WORKDIR /user-service

COPY ./package.json ./

RUN npm install --ignore-scripts

COPY ./ .

RUN npm run build

ENV TZ=Europe/Paris

EXPOSE 4001

USER node

CMD ["npm", "run", "dev"]