const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer(function (req, res) {
  const q = url.parse(req.url, true);
  const filename = "./views/view_palavra" + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': './views/view_palavra'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': './views/navbar'});
    res.write(data);
    return res.end();
  });
}) 
server.listen(8080, '', () => {
    console.log('Servidor de pé em: http://localhost:8080')
    console.log('Pra desligar o servidor: Ctrl + c')
});