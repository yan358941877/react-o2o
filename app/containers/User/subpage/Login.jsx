import React from 'react'
import './style.less'

/* components*/
import CommonHeader from '../../../components/CommonHeader'
import LoginForm from '../../../components/LoginForm'
class Login extends React.Component{
    handleLogin(username){
        if(this.props.handleLogin){
            this.props.handleLogin(username)
        }
    }

    render(){
        
        return (
            <div id='login-page'>
                <CommonHeader title='登录' />
                <LoginForm handleLogin={this.handleLogin.bind(this)}/>
            </div>
        )
    }
}

export default Login