const http = require('http');
const url = require('url');
const fs = require('fs');
const express = require('express')
const app = express()


const server = http.createServer(function (req, res) {
  const q = url.parse(req.url, true);
  const filename = "." + q.pathname;
  app.get('../index', function (req, res) {
    res.send('index');
  });
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}) 
server.listen(8080, '', () => {
    console.log('Servidor de pé em: http://localhost:8080')
    console.log('Pra desligar o servidor: Ctrl + c')
});