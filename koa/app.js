// const Koa = require('koa');
// const app = new Koa()
// app.use(async (context, next) => {
//     console.log(`开始请求: ${context.url}`)
//     const startTime = new Date().getTime();
//     await next();
//     const endTime = new Date().getTime()
//     console.log(`请求完成，路径为${context.url}, 耗时为${parseInt(endTime - startTime)}`);
// })
// app.use(async (context, next) => {
//     console.log('app1')
//     context.body = {
//         name: '123132'
//     }
//     await next()
// })
// app.use((context, next) => {
//     console.log('app2')
//     context.body = {
//         name: 'hello world'
//     }
// })
// app.listen(3001)

const {Koa} = require('./diy-koa');
const app = new Koa()
app.use(ctx => {
    ctx.body = {
        name: 'wangning'
    }
    console.log(ctx.body);
})
app.listen(3001)