import React from 'react'
import './style.less'

import Star from '../Star'

class CommentItem extends React.PureComponent{
    render(){
        const data = this.props.data
        return (
            <div className='comment-item'>
               <div className='comment-user'>
                    <i className='icon-user'></i>
                    <span>{data.username}</span>
                </div>
                <div className='comment-star'>
                    <Star star={data.star}/>
                </div>
                <div className='comment-info'>
                    <p>{data.comment}</p>
                </div>
            </div>
        )
    }
}

export default CommentItem