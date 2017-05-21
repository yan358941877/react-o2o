import React from 'react'
import './style.less'

import {getSellerComment} from '../../../fetch/detail'

import LoadMore from '../../../components/LoadMore'
import CommentList from '../../../components/CommentList'
class Comment extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: [],
            hasMore: false,
            isLoading: false,
            page: 0
        }
    }
    componentDidMount(){
        this.sendRequest()
    }

    sendRequest(){
        const id = this.props.id
        const page = this.state.page
        this.setState({
            isLoading: true
        })

        const response = getSellerComment(id, page)
        this.handleResponse(response)
    }

    handleResponse(response){
        response.then(res=>{
            return res.json()
        }).then(json=>{
            this.setState({
                data: this.state.data.concat(json.data),
                hasMore: json.hasMore,
                isLoading: false,
                page: this.state.page+1
            })
            if(!json.hasMore){
                window.onscroll = null
            }
        })
    }
    render(){
        //console.log(this.state)
        return (
            <div id='detail-comment'>
                <h2>用户评论</h2>
                {
                    this.state.data.length
                    ? <CommentList data={this.state.data} />
                    : ''
                }
                <LoadMore hasMore={this.state.hasMore} sendRequest={this.sendRequest.bind(this)}/>
            </div>
        )

    }
}

export default Comment