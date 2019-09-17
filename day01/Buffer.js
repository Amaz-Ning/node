const buffer = Buffer.alloc(20) // 创建20位的buffer
console.log(buffer)
const buffer2 = Buffer.alloc(20, 1) // 创建20位的buffer 并将1填充进去
console.log(buffer2)
const buffer3 = Buffer.allocUnsafe(20) // 会有脏数据
console.log(buffer3)
const buffer4 = Buffer.from('Amaz') // 将数据转换成二进制流
const buffer5 = Buffer.from([1, 2, 3]) // 如果传递进来的是一个数组的话 那么数组中只能存放数字
console.log(buffer4)
console.log(buffer5)
// 将buffer还原成字符串          将buffer还原成数组
console.log(buffer4.toString(), new Float32Array(buffer5))