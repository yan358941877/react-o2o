import React from 'react'
import './style.less'

import CommentItem from '../CommentItem'

class CommentList extends React.PureComponent{
    render(){
        return (
            <div id='comment-list'>
                {
                    this.props.data.map((item,index)=>{
                        return <CommentItem data={item} key={index} />
                    })
                }
            </div>
        )
    }
}

export default CommentList