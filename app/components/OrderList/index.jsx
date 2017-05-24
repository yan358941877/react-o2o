import React from 'react'
import './style.less'

import OrderItem from '../OrderItem'

class OrderList extends React.PureComponent{
    render(){
        //console.log(this.props.sendComment)
        return (
            <div id="order-list-page">
                <h2>您的订单</h2>
                <div id='order-list'>
                    {
                        this.props.data.map((item, index)=>{
                            return <OrderItem data={item} key={index} sendComment={this.props.sendComment}/>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default OrderList