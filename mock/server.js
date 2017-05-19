var app = require('koa')()
var router = require('koa-router')()
var koaBody = require('koa-body')

console.log('please open http://localhost:3000/')

router.get('/', function *(next){
    this.body = 'hello koa!'
})


router.get('/api/homead', function *(next){
    const ads = require('./home/ad.js')
    this.body = ads
})

const guessDatas = require('./home/guess.js')
router.get('/api/guessDatas/:cityName/:page', function *(next){
    const params = this.params
    console.log(params.cityName)
    console.log(params.page)
    if(params.page == 6){
        guessDatas.hasMore = false
    }else {
        guessDatas.hasMore = true
    }
    this.body = guessDatas
})


app.use(router.routes()).use(router.allowedMethods())

// 监听3000端口
app.listen(3000)