const http = require('http')
const fs = require('fs')

const api = http.createServer((req, res) => {
    const page = fs.readFileSync('./index.html')
    res.end(page)
})

module.exports = api