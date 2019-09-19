const fs = require('fs')


// stream旨在将大块的数据拆分成多个数据块 以方便传输（拆成多个buffer）
// 如果数据量较小 那么就没必要用stream （因为只能拆成一个buffer 跟直接读写没什么区别）
// 创建读写流
const rs = fs.createReadStream(`${__dirname}/source/dream.mp3`)
const ws = fs.createWriteStream(`${__dirname}/source/dream2.mp3`)

// 监听流
rs.once('open', (data) => {
    console.log('监听读入流打开')
    console.log(data)
})
ws.once('open', (data) => {
    console.log('监听写入流打开')
    console.log()
})

let t = 0
let a = []

// readStream是将数据拆分成多个buffer 以实现流的概念
// 监听数据 如果拆出来一个数据 就执行一次
rs.on('data', (data) => {
    ++t
    a.push(data)
    // 再通过writeStream 将一块一块的数据写入指定地址
    ws.write(data)
})

// 监听readStream拆分完成的事件
rs.once('end', () => {
    // 文件已经拆分完毕
    console.log('文件已经拆分完毕')
    console.log(t)
    console.log(a, a.length)
})

// 既然有打开 就有关闭
// 监听readStream关闭的事件

rs.once('close', () => {
    // 读入流已关闭
    console.log('读入流已关闭')
})