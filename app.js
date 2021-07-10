const http = require('http');
http
  .createServer(function (request, response) {
    response.end('Hello NodeJS!');
  })
  .listen(8200, '', function () {
    console.log('Сервер начал прослушивание запросов на порту 8200');
  });
