const http = require('http')
const a = require('./exportDetail')
console.log(a);
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('hello there');
}).listen(8001)
console.log('service is running on 8001')