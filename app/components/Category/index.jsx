import React from 'react'
import './style.less'
import ReactSwipe from 'react-swipe'
import {Link} from 'react-router'

class Category extends React.PureComponent {
    constructor(props){
        super(props)
        this.state = {
            index: 0
        }
    }
    render() {
        let opt = {
            callback: (index) => {
                this.setState({ index: index })
            }
        }
        return (
            <div id='category'>
                <ReactSwipe swipeOptions={opt}>
                    <ul className="carousel-page">
                        <Link to='/search/category/景点'><li className="float-left jingdian">景点</li></Link>
                        <Link to='/search/category/KTV'><li className="float-left ktv">KTV</li></Link>
                        <Link to='/search/category/购物'><li className="float-left gouwu">购物</li></Link>
                        <Link to='/search/category/生活服务'><li className="float-left shenghuofuwu">生活服务</li></Link>
                        <Link to='/search/category/健身运动'><li className="float-left jianshenyundong">健身运动</li></Link>
                        <Link to='/search/category/美发'><li className="float-left meifa">美发</li></Link>
                        <Link to='/search/category/亲子'><li className="float-left qinzi">亲子</li></Link>
                        <Link to='/search/category/小吃快餐'><li className="float-left xiaochi">小吃快餐</li></Link>
                        <Link to='/search/category/自助餐'><li className="float-left zizhu">自助餐</li></Link>
                        <Link to='/search/category/酒吧'><li className="float-left jiuba">酒吧</li></Link>
                    </ul>
                    <ul className="carousel-page">
                        <Link to='/search/category/美食'><li className="float-left meishi">美食</li></Link>
                        <Link to='/search/category/电影'><li className="float-left dianying">电影</li></Link>
                        <Link to='/search/category/酒店'><li className="float-left jiudian">酒店</li></Link>
                        <Link to='/search/category/休闲娱乐'><li className="float-left xiuxianyule">休闲娱乐</li></Link>
                        <Link to='/search/category/外卖'><li className="float-left waimai">外卖</li></Link>
                        <Link to='/search/category/火锅'><li className="float-left huoguo">火锅</li></Link>
                        <Link to='/search/category/丽人'><li className="float-left liren">丽人</li></Link>
                        <Link to='/search/category/度假出行'><li className="float-left dujiachuxing">度假出行</li></Link>
                        <Link to='/search/category/足疗按摩'><li className="float-left zuliao">足疗按摩</li></Link>
                        <Link to='/search/category/周边游'><li className="float-left zhoubianyou">周边游</li></Link>
                    </ul>
                    <ul className="carousel-page">
                        <Link to='/search/category/日本菜'><li className="float-left ribencai">日本菜</li></Link>
                        <Link to='/search/category/SPA'><li className="float-left spa">SPA</li></Link>
                        <Link to='/search/category/结婚'><li className="float-left jiehun">结婚</li></Link>
                        <Link to='/search/category/学习培训'><li className="float-left xuexipeixun">学习培训</li></Link>
                        <Link to='/search/category/西餐'><li className="float-left xican">西餐</li></Link>
                        <Link to='/search/category/火车机票'><li className="float-left huochejipiao">火车机票</li></Link>
                        <Link to='/search/category/烧烤'><li className="float-left shaokao">烧烤</li></Link>
                        <Link to='/search/category/家装'><li className="float-left jiazhuang">家装</li></Link>
                        <Link to='/search/category/宠物'><li className="float-left chongwu">宠物</li></Link>
                        <Link to='/search/category/全部分类'><li className="float-left quanbufenlei">全部分类</li></Link>
                    </ul>
                </ReactSwipe>
                <ul id="carousel-index">
                    <li className={this.state.index==0?'active':''}></li>
                    <li className={this.state.index==1?'active':''}></li>
                    <li className={this.state.index==2?'active':''}></li>
                </ul>
            </div>
        )
    }
}

export default Category