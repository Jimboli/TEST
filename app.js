var http= require('http')

var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/header'});
  res.end('Hello World! If you see this dumb test content, you are Ishan!');
});

server.listen(8080, '108.89.26.149'); 
