FROM node:24

WORKDIR /app

COPY server.js .

EXPOSE 5005

CMD ["node", "server.js"]
