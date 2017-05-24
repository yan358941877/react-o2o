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

const searchResult = require('./search/searchResult.js')
router.get('/api/search/:category/:keyword/:page', function *(next){
    const params = this.params
    console.log(params.categoty)
    console.log(params.keyword)
    console.log(params.page)

    if(params.page == 6){
        searchResult.hasMore = false
    }else {
        searchResult.hasMore = true
    }
    this.body = searchResult
})

/* 处理商家详情请求*/
const sellerInfo = require('./detail/seller.js')
router.get('/api/detail/:id', function *(next){
    const params = this.params
    const id = params.id

    /*
    根据id值，对店铺信息进行查找
    */
    this.body = sellerInfo
})

/* 处理商家评价请求 */
const comments = require('./detail/comment.js')
router.get('/api/detail/comment/:id/:page', function *(next){
    const params = this.params
    const id = params.id
    const page = params.page

    /*
    根据id值和page值，查找对应的comment信息
    */
    if(params.page == 4){
        comments.hasMore = false
    }else {
        comments.hasMore = true
    }
    this.body = comments
})

/* 查询用户订单 */
const orderlist = require('./orderlist/orderList.js')
router.get('/api/order/:username', function *(next){
    const params = this.params
    const username = params.username

    /*查询用户订单操作*/
    this.body = orderlist
})

app.use(router.routes()).use(router.allowedMethods())

// 监听3000端口
app.listen(3000)