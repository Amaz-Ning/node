// 引入fs模块
const fs = require('fs')
// // 同步打开文件 参数： path flags 拿到文件对应的文件描述符

// // flags
// // r  读取 如果flag为r 之后进行写操作的话 将会报错： 写操作被拒绝 因为r只能读文件
// // r+ 读取并写入
// // w  写入
// // w+ 写入并读取
// // a  追加写入
// // a+ 追加写入并读取
// // + 表示添加相反操作

// // r+ 和 w+ 的区别
// // 1. r+ 当文件不存在时 则报错 w+ 文件不存在时则创建相应的文件
// // 2. r+ 在写入数据时 不会清空文件中的内容 而是从头开始写入（替换）
// //    w+ 会先清空文件中的内容 之后再写入新的内容

// const fd = fs.openSync(`${__dirname}/source/a.txt`, 'r+')
// // 同步写入内容 参数： fd data
// fs.writeFileSync(fd, 'aaaaaa')
// // 同步关闭文件 参数： fd
// fs.closeSync(fd)



// // 异步操作

// // 打开文件
// fs.open(`${__dirname}/source/a.txt`, 'w+', (err, fd) => {
//     // 异步操作都是通过回调函数执行下一步的操作
//     // 如果没有报错的话 打印出data
//     if (!err) {
//         // open方法中的data为打开文件所对应的文件描述符
//         // 拿到文件描述符之后 我们就能进行写操作
//         // 异步写操作 回调函数只接受一个参数： err
//         fs.writeFile(fd, '13212313', (err) => {
//             if (!err) {
//                 console.log('写入成功')
//             } else {
//                 throw err
//             }
//             // 异步关闭 回调函数也只接受一个参数： err
//             fs.close(fd, (err) => {
//                 if (!err) {
//                     console.log('文件关闭')
//                 } else {
//                     throw err
//                 }
//             })
//         })
//     } else {
//         // 否则抛出错误
//         throw err
//     }
// })

// 为了避免回调地狱 使用async await
let open = function (path, flag) {
    return new Promise((resolve, reject) => {
        fs.open(path, flag, (err, fd) => {
            if (!err) {
                resolve(fd)
            } else {
                reject(err)
            }
        })
    })
}

let write = function (fd, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fd, data, (err) => {
            if (!err) {
                resolve()
            } else {
                reject(err)
            }
        })
    })
}
let p = async () => {
    console.log('开始写入')
    const fd = await open(`${__dirname}/source/b.txt`, 'w')
    await write(fd, '啊啊啊啊啊啊异步啊啊啊啊啊啊啊')
    console.log('写入完成')
}
p()
console.log('正在执行')

// async 函数优先执行异步操作之前的操作 或者说时await之前的操作