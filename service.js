// 启动web服务，可作为代理

const proxy = require('express-http-proxy');
const express = require('express');
const path = require('path');
const http = require('http');

const app = express();
// const proxyHost = 'http://192.168.124.37:8080/';
//const proxyHost = 'http://192.168.78.129:8080/';
const proxyHost = 'http://minions-service:8080/';
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/', proxy(proxyHost));

const server = http.createServer(app);
const option = {
  host: 'localhost',
  port: process.env.PORT || 9088
};
server.listen({host: '0.0.0.0', port: option.port});
server.on('listening', () => {
  console.log(`server started at http://${option.host}:${option.port}`)
});
