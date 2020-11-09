const net = require('net')
const chatServer = net.createServer();
const clientList = []
chatServer.on('connection', client => {
    client.write('你好')
    clientList.push(client);
    client.on('data', data => {
        console.log('接收数据', data.toString())
        clientList.forEach(c => {
            c.write(data)
        })
    })
})
chatServer.listen(3001)