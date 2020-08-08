// 启动web服务，可作为代理

const proxy = require('express-http-proxy');
const express = require('express');
const path = require('path');

const app = express();
const proxyHost = 'http://www.test-proxy-host.com';
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/', proxy(proxyHost));

const option = {
  host: 'localhost',
  port: process.env.PORT || 9088
};
app.listen(option.port, () => {
  console.log(`server started at http://${option.host}:${option.port}`)
});