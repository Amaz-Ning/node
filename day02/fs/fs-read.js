const fs = require('fs')

// 同步读取
const readTxt = fs.readFileSync(`${__dirname}/source/a.txt`)
console.log(readTxt) // readText 返回一个buffer
console.log(readTxt.toString()) // toString之后可以看到文本内容

// 异步读取 readFile 传递两个参数： 路径和回调函数
// 回调函数中传递两个参数： error和data
fs.readFile(`${__dirname}/source/b.txt`, (error, data) => {
    if (!error) {
        console.log(data.toString())
    }
})
console.log('fs异步操作')

