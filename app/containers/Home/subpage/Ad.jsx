import React from 'react'
import './style.less'
import HomeAd from '../../../components/HomeAd'
import {getRecommendAd} from '../../../fetch/home'

class Ad extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            recommendAd: null
        }
    }
    // 组件加载完毕，向服务器端请求广告数据
    componentDidMount(){
        const response = getRecommendAd()
        this.handleResponse(response)
    }
    // 处理广告数据
    handleResponse(response){
        response.then(res=>{
            return res.json()
        }).then(json=>{
            this.setState({
                recommendAd: json
            })
        })
    }
    render(){
        return (
            <div id="recommend-ad">
                <h2>超值特惠</h2>
                <HomeAd datas={this.state.recommendAd}/>
            </div>
        )
    }
}

export default Ad
