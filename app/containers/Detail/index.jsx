import React from 'react'
import './style.less'

import CommonHeader from '../../components/CommonHeader'

import SellerInfo from './subpage/SellerInfo'
import Comment from './subpage/Comment'

class Detail extends React.Component{
    
    render(){
        return (
            <div id="detail-page">
                <CommonHeader title="商户详情"/>   
                 <SellerInfo id={this.props.params.id} />
                 <Comment id={this.props.params.id} />
            </div>
        )
    }
}

export default Detail