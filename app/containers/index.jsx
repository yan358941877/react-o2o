import React from 'react'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as actionCreator_userinfo from '../actions/userinfo'
// App组件是所有其他组件（页面）的父组件，在这个组件中做一些初始化的工作--->获取城市信息
// 这个组件不负责展示页面
class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            cityName: '',
            initDone: false
        }
    }

    componentDidMount(){
        console.log(this.props)
        // 从localStorage获取城市信息
        let cityName = localStorage.getItem('cityName')
        if(!cityName){
            cityName = '北京'
        }
        // 将cityName存入store的userinfo中
        this.props.operateUserinfo.update({
            cityName
        })
        this.setState({
            cityName: cityName,
            initDone: true
        })

    }
    render(){
        return (
            <div>
            {
                this.state.initDone
                ? <h1>{this.state.cityName}</h1>
                : <p>loading....</p>
            }
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {}
}

const mapDispatchToProps = (dispatch)=>{
    return {
        // 生成对userinfo修改的方法,看bindActionCreators的源码，仔细了解其原理
        operateUserinfo: bindActionCreators(actionCreator_userinfo, dispatch)
    }
}

App = connect(mapStateToProps, mapDispatchToProps)(App)
export default App