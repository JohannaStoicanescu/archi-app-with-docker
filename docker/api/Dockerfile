FROM node:alpine

WORKDIR /api

COPY ./api/package.json ./

RUN npm install --ignore-scripts

COPY ./api .

RUN npm run build

ENV TZ=Europe/Paris

EXPOSE 4000

USER node

CMD ["npm", "run", "dev"]
