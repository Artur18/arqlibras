const http = require('http')

const server = http.createServer((req, res) => {
   if (req.url == 'http://127.0.0.1:3001')
        res.end('200')
    res.end(resposta[res.url] || resposta['SemURL'])
})

server.listen(3001, 'localhost', () => {
    console.log('Servidor de pé em: http://localhost:3001')
    console.log('Pra desligar o servidor: Ctrl + c')

})