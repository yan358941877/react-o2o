import React from 'react'
import './style.less'

class LoginForm extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    handleUsernameChange(event){
        const username = event.target.value
        this.setState({
            username
        })
    }
    handlePasswordChange(event){
        const password = event.target.value
        this.setState({
            password
        })
    }
    handleLogin(){
        if(!this.state.username||!this.state.password){
            return 
        }
        if(this.props.handleLogin){
            this.props.handleLogin(this.state.username)
        }
    }
    render() {
        return (
            <div id='login-form'>
                <div className='login-username row'>
                    <i className='icon-phone' />
                    <input 
                        type="text" 
                        placeholder='输入用户名' 
                        onChange={this.handleUsernameChange.bind(this)}
                        value={this.state.username}/>
                </div>
                <div className='login-password row'>
                    <i className='icon-key' />
                    <input 
                        type="password" 
                        placeholder='输入用户名' 
                        onChange={this.handlePasswordChange.bind(this)}
                        value={this.state.password}/>
                </div>
                <div className='login-submit row' onClick={this.handleLogin.bind(this)}>
                    登录
                </div>
            </div>

        )
    }
}

export default LoginForm