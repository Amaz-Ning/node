const http = require('http')
const proxy = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", 'http://localhost:3001')
    res.setHeader("Content-Type", 'text/html')
    if (req.url === '/') {
        res.end('proxy')
    }
})
module.exports = proxy