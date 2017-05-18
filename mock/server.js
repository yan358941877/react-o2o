var app = require('koa')()
var router = require('koa-router')()
var koaBody = require('koa-body')

console.log('please open http://localhost:3000/')

router.get('/', function *(next){
    this.body = 'hello koa!'
})

app.use(router.routes()).use(router.allowedMethods())

// 监听3000端口
app.listen(3000)