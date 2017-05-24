import React from 'react'
import './style.less'

import Evaluate from '../Evaluate'

class OrderItem extends React.PureComponent {
    constructor(props) {
        super(props)
        // commentState代表当前订单的评价状态，为0 代表未评价，1代表正在评价，2代表已经评价
        this.state = {
            commentState: this.props.data.commentState
        }
    }
    componentWillMount() {
        if (this.props.commentState == 1) {
            this.setState({
                commentState: 0
            })
        }
    }

    handleEvaluating(){
        // 当用户正在输入评价信息的时候，不应该将该评价状态提交到服务器，直到用户点击提交按钮时才应该提交内容到服务器

        // 修改当前组件的状态
        this.setState({
            commentState: 1
        })
    }

    handleCancelEvaluate(){
        this.setState({
            commentState: 0
        })
    }
    handleSubmitEvaluate(evaluate_content){
        // 提交评价内容到服务器
        console.log('orderItem   ', evaluate_content)
        // 修改组件状态
        this.setState({
            commentState: 2
        })
    }
    render() {
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
                    {

                        this.state.commentState == 0
                            ? <p className="no-comment" onClick={this.handleEvaluating.bind(this)}>评价</p>
                            :
                            this.state.commentState == 1
                                ? ''
                                :
                                this.state.commentState == 2
                                    ? <p className="has-comment">已评价</p>
                                    : ''
                    }
                </div>
                <div className="order-item-evaluate">
                    {
                    this.state.commentState == 1
                        ? <Evaluate 
                            handleCancelEvaluate={this.handleCancelEvaluate.bind(this)}
                            handleSubmitEvaluate={this.handleSubmitEvaluate.bind(this)}/>
                        : ''
                    }
                </div>
            </div>
        )
    }
}

export default OrderItem

// this.state.commentState==0
//                         ? <p className="no-comment">评价</p>
//                         : 
//                             this.state.commentState == 1
//                             ? <p className="being-comment">评价中</p>
//                                 : 
//                                     this.state.commentState ==2 
//                                     ? <p className="has-comment">已评价</p>
//                                     : ''