FROM node:21.6.1
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY ./package.json  .
COPY ./package-lock.json  .
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "start"]