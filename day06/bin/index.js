const fs = require('fs');
const path = require('path');
function Copy (src, target) {
    // 只是将图片的二进制内容以文本的形式复制到其他文件中。并不能将整个文件复制过去
    fs.writeFileSync(src, fs.readFileSync(target))
}

Copy(path.resolve(__dirname, '../img/img.js'), path.resolve(__dirname, '../img/timg.jpeg'));