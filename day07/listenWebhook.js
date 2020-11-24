const http = require('http')
http.createServer((req, res) => {
    console.log(req);
}).listen(9000)