import React from 'react'
import './style.less'

class OrderItem extends React.PureComponent{
    render(){
        const data = this.props.data
        return (
            <div className='order-item clear-fix'>
                <div className='order-item-img float-left'>
                    <img src={data.img} />
                </div>
                <div className='order-item-info float-left'>
                    <p>{data.title}</p>
                    <p>数量：{data.count}</p>
                    <p>价格：￥{data.price}</p>
                </div>
                <div className='order-item-comment float-left'>
                    <p>评价</p>
                </div>
            </div>
        )
    }
}

export default OrderItem