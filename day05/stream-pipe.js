// pipe 管道
 
const fs = require('fs')

// 创建读入流
const rs = fs.createReadStream(`${__dirname}/source/dream2.mp3`)
// 创建写入流
const ws = fs.createWriteStream(`${__dirname}/source/dream5.mp3`)

// 使用原生pipe
// rs.pipe(ws)

// 手动实现pipe

const pipe = (ws) => {
    rs.on('data', (data) => {
        const d = ws.write(data)
        // 我们知道 stream 是将数据分割成多个数据块
        // d如果返回false 说明当前的数据块还没有写入完成
        // 所以我们不让当前的读入流继续流动
        if(!d) {
            // 使用pause方法 暂停读入流的执行
            rs.pause()
        }
    })
    // 再监听 写入流的drain方法
    // 如果drain方法执行 那么说明当前数据块已经写入完毕 准备写入下一个数据块
    ws.on('drain', () => {
        // 这个时候 我们让读入流继续执行
        rs.resume()
    })

    // 监听读入流是否已经完全读取
    rs.on('end', () => {
        // 如果读完了 说明写入流也完全执行完毕了  那我们就结束掉写入流
        ws.end()
    })
}

rs.pipe2 = pipe

rs.pipe2(ws)