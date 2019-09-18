const fs = require('fs')
// const { COPYFILE_EXCL } = fs.constants;

// 使用原生api 
// 异步复制 传递四个参数： 源文件的地址 目标文件的地址 修饰符(COPYFILE_EXCL 如果目标文件已存在 则失败 如果不存在 则创建 默认值为0) 回调函数
// fs.copyFile('./source/index.txt', './source/targets.txt', 0, (err) => {
//     if (!err) {
//         console.log('拷贝完成')
//     } else {
//         throw err
//     }
// })

// 同步复制 传递三个参数： 源文件的地址 目标文件的地址 修饰符(COPYFILE_EXCL 如果目标文件已存在 则失败 如果不存在 则创建 默认值为0)
// fs.copyFileSync('./source/index.txt', './source/targets.txt', 0)

// 通过readfile 和 writefile 手动实现同步copy

let copy = (src1, src2, flags = 0) => {
    const originData = fs.readFileSync(src1)
    console.log(originData)
    fs.writeFileSync(src2, originData)
}

copy('./source/index.txt', './source/target.txt')