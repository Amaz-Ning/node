// ora 优雅的转轮工具 cli首页
const ora = require('ora');
const progress = ora('开始下载')
// promisify node内置模块util中的方法 将一个函数转换成promise
const {promisify} = require('util');
// 从github上下载项目
const download = promisify(require('download-git-repo'));

const src = 'github:Amaz-Ning/algorithm';
const dist = 'easy';
Copy(src, dist);

async function Copy(src, dist) {
    progress.start();
    try {
        await download(src, dist)
    } catch (error) {
        progress.fail()
    }
    progress.succeed()
}