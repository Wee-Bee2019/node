const http = require('http');
http
  .createServer(function (request, response) {
    response.end('Hello NodeJS!');
  })
  .listen(3000, '146.158.12.225', function () {
    console.log('Сервер начал прослушивание запросов на порту 3000');
  });
