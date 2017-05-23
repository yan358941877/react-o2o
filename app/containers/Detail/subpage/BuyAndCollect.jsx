import React from 'react'
import './style.less'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {hashHistory} from 'react-router'

import * as actionCreator_userinf from '../../../actions/userinfo'
import * as actionCreator_collect from '../../../actions/collect'

class BuyAndCollect extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            collect: false
        }
    }
    componentDidMount(){
        this.checkCollect()
    }
    checkCollect(){
        if(!this.props.collect.collectlist){
            this.setState({
                collect: false
            })
            return
        }
        const index = this.props.collect.collectlist.indexOf(this.props.id)
        if(index<0){
            this.setState({
                collect: false
            })
        }else {
            this.setState({
                collect: true
            })
        }
    }

    checkLogin(){
        const username = this.props.userinfo.username
        if(!username){
            return false
        }else {
            return true
        }
    }
    handleClickBuy(event){
        if(this.checkLogin()){
            alert('购买成功')
        }else{
            // 跳转到登录页面进行登录
            hashHistory.push('/login')
        }
    }
    handleClickCollect(event){
        const id = this.props.id
        console.log(id)
        if(this.state.collect){
            // 修改redux中的collect ---取消收藏
            this.props.operateCollect.cancelCollect(id)
            
            this.setState({
                collect: false
            })
        }else {
            // 修改redux中的collect---添加收藏
            this.props.operateCollect.addCollect(id)
            this.setState({
                collect: true
            })
        }
    }
    render(){
        
        return (
            <div id="buy-collect">
                <span className='collect'onClick={this.handleClickCollect.bind(this)}>
                    {
                        this.state.collect
                        ? '取消收藏'
                        : '收藏'
                    }
                </span>
                <span 
                    className='buy'
                    onClick={this.handleClickBuy.bind(this)}>
                    购买
                </span>
            </div>
        )
    }
}

const mapStateToProps = (state)=> {
    return {
        userinfo: state.userinfo,
        collect: state.collect
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        operateUserinfo: bindActionCreators(actionCreator_userinf, dispatch),
        operateCollect: bindActionCreators(actionCreator_collect,dispatch)
    }
}

BuyAndCollect = connect(mapStateToProps,mapDispatchToProps)(BuyAndCollect)
export default BuyAndCollect