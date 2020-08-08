FROM node:latest

# create app dir
RUN mkdir -p /app/node-web-proxy-service
WORKDIR /app/node-web-proxy-service

# Bundle app source
COPY . /app/node-web-proxy-service
RUN npm install
EXPOSE 9088
CMD ["npm", "start"]
