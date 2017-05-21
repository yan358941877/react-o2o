import React from 'react'
import './style.less'

import CommonHeader from '../../components/CommonHeader'

import SellerInfo from './subpage/SellerInfo'
class Detail extends React.Component{
    
    render(){
        return (
            <div id="detail-page">
                <CommonHeader title="商户详情"/>   
                 <SellerInfo id={this.props.params.id} />
            </div>
        )
    }
}

export default Detail