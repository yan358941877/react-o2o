import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actionCreator_userinfo from '../actions/userinfo'
// App组件是所有其他组件（页面）的父组件，在这个组件中做一些初始化的工作--->获取城市信息
// 这个组件不负责展示页面
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cityName: '',
            initDone: false
        }
    }

    componentDidMount() {
        // console.log("test start...")
        // var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

        // var a = { obj_a: 'color', obj_b: 'red'};
        // var b = _extends({}, a, {obj_a: 'ooooo'});
        // console.log(a)
        // console.log(b)
        // console.log(a.obj_a === b.obj_a)
        // console.log(a.obj_b === b.obj_b)
        // console.log('test end')
        // 从localStorage获取城市信息
        let cityName = localStorage.getItem('cityName')
        if (!cityName) {
            cityName = '北京'
        }

        // 将cityName存入store的userinfo中
        this.props.operateUserinfo.updateCityName(cityName)
        this.setState({
            cityName: cityName,
            initDone: true
        })

    }
    render() {
        return (
            <div>
                {
                    this.state.initDone
                        ? this.props.children
                        : <p>loading....</p>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        // 生成对userinfo修改的方法,看bindActionCreators的源码，仔细了解其原理
        // actionCreator_userinfo中包含了多少actionCreator，则operateUserInfo中就会有多少个对应的方法
        operateUserinfo: bindActionCreators(actionCreator_userinfo, dispatch)

    }
}

App = connect(mapStateToProps, mapDispatchToProps)(App)
export default App