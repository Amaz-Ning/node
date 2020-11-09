const http = require('http')
const request = require('./request')
const response = require('./response')
const context = require('./context')
class Diy_Koa {
    use (callback) {
        this.callback = callback
    }
    listen (...args) {
        const server = http.createServer((req, res) => {
            // 创建上下文环境
            const ctx = this.createContext(req, res)
            this.callback(ctx)
            res.end('123');
        })
        server.listen(3002)
    }
    // 创建上下文环境 目的是将req和res对象绑定到context对象中 让代码更优雅
    createContext(req, res) {
        const ctx = Object.create(context);
        ctx.request = Object.create(request);
        ctx.response = Object.create(response);

        ctx.req = ctx.request.req = req
        ctx.res = ctx.response.res = res

        return ctx
    }
}

module.exports.Koa = Diy_Koa