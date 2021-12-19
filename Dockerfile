FROM node:16-buster

WORKDIR /app
COPY . .
RUN npm install gatsby-cli -g
RUN npm install
RUN npm run build

EXPOSE 9000
CMD [ "npm", "run", "serve" ]
