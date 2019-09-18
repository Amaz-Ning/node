const fs = require('fs')

// 复制图片
// 通过原生的copy
// fs.copyFile(`${__dirname}/source/origin/a.png`, `${__dirname}/source/study.png`, 0, (err, data) => {
//     if (!err) {
//         console.log('复制成功')
//     } else {
//         throw err
//     }
// })

// 通过read和write

fs.readFile('C:/Users/10560/Desktop/a.png', (err, data) => {
    if (err) throw err
    fs.writeFile(`${__dirname}/source/study2.png`, data, (err) => {
        if (err) throw err
        console.log('复制成功')
    })
})