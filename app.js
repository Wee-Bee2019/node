const http = require('http');
http
  .createServer(function (request, response) {
    response.end('Hello NodeJS!');
  })
  .listen(82, '', function () {
    console.log('Сервер начал прослушивание запросов на порту 82');
  });
