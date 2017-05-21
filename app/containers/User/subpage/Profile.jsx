import React from 'react'
import './style.less'

/* components*/
import CommonHeader from '../../../components/CommonHeader'

class Profile extends React.Component{
    

    render(){
        
        return (
            <div id='login-page'>
                <CommonHeader title='用户资料' />
            </div>
        )
    }
}

export default Profile