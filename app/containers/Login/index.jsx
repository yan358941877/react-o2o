import React from 'react'
import './style.less'

/* module */
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {hashHistory} from 'react-router'
import * as actionCreator_userinfo from '../../actions/userinfo'

/* components*/
import CommonHeader from '../../components/CommonHeader'
import LoginForm from '../../components/LoginForm'

class Login extends React.Component{
    
   handleLogin(username){
       
        this.props.operateUserinfo.userLogin(username)
        window.history.back()
   }
    render(){
        console.log(this.props)
        return (
            <div id='login-page'>
                <CommonHeader title='登录' />
                <LoginForm handleLogin={this.handleLogin.bind(this)}/>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {}
}
const mapDispatchToProps = (dispatch)=>{
    return {
        operateUserinfo: bindActionCreators(actionCreator_userinfo, dispatch)
    }
}
Login = connect(mapStateToProps, mapDispatchToProps)(Login)
export default Login