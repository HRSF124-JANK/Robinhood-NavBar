FROM node:10.17

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

COPY package.json /src/app/
RUN npm install

EXPOSE 3007

CMD [ "npm", "run", "start:docker" ]