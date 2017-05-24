import React from 'react'
import './style.less'

/* module */
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {hashHistory} from 'react-router'
import * as actionCreator_userinfo from '../../actions/userinfo'

/* components*/
import Login from './subpage/Login'
import Profile from './subpage/Profile'

class User extends React.Component{
    constructor(props){
        super(props)
        
    }
   
    render(){
        return (
            <div id='user-page'>
                {
                    !this.props.username
                    ? <Profile username={this.props.username} cityName={this.props.cityName}/>
                    : <Login handleLogin={this.props.operateUserinfo.userLogin}/>
                }
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        username: state.userinfo.username,
        cityName: state.userinfo.cityName
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        operateUserinfo: bindActionCreators(actionCreator_userinfo, dispatch)
    }
}
User = connect(mapStateToProps, mapDispatchToProps)(User)
export default User