import React from 'react'
import './style.less'

/* components*/
import CommonHeader from '../../../components/CommonHeader'
import OrderList from '../../../components/OrderList'

import {getOrderList} from '../../../fetch/order'
class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            data: []
        }
        this.sendRequest = this.sendRequest.bind(this)
        this.handleResponse = this.handleResponse.bind(this)
    }
    
    componentDidMount(){
        this.sendRequest()
    }

    sendRequest(){
        const username = this.props.username
        let response = getOrderList(username)
        this.handleResponse(response)
    }

    handleResponse(response){
        response.then(res=>{
            return res.json()
        }).then(json=>{
            this.setState({
                data: json
            })
        })
    }
    render(){
        return (
            <div id='login-page'>
                <CommonHeader title='用户主页' />
                <div id="user-profile">
                    <p>
                        <i className="icon-user"></i>
                        {this.props.username}
                    </p>
                    <p>
                        <i className="icon-map-marker"></i>
                        {this.props.cityName}
                    </p>
                </div>
                <OrderList data={this.state.data}/>
            </div>
        )
    }
}

export default Profile