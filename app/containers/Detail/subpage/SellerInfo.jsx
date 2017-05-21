import React from 'react'
import './style.less'

import { getDetailInfo } from '../../../fetch/detail'
import Star from '../../../components/Star'
class SellerInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {}
        }
    }
    componentDidMount() {
        this.sendRequest()

    }
    sendRequest() {
        const id = this.props.id
        const response = getDetailInfo(id)
        this.handleResponse(response)
    }

    handleResponse(response) {
        response.then(res => {
            return res.json()
        }).then(json => {
            this.setState({
                data: json
            })
        })
    }

    render() {
        const data = this.state.data
        return (
            <div>
                {
                    data.title&&
                       (<div id='seller-info' className='clear-fix'>
                            <div className='img-container float-left'>
                                <img src={data.img} />
                            </div>
                            <div className='des-container float-left'>
                                <h2>{data.title}</h2>
                                <Star star={data.star} />
                                <span>￥{data.price}</span>
                                <p>{data.subTitle}</p>
                            </div>
                            <div className='open-time'>
                                <p dangerouslySetInnerHTML={{__html: data.desc}}></p>
                            </div>
                        </div>
                        )
                      
                }
            </div>

        )
    }
}

export default SellerInfo