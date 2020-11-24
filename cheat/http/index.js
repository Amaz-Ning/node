const api = require('./api')
const proxy = require('./proxy')
api.listen(3001)
proxy.listen(4001)