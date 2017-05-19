import React from 'react'
import './style.less'

class ShowListItem extends React.PureComponent {
    render() {
        const data = this.props.data
        return (
            <div className='show-list-item clear-fix'>
                <div className="item-img float-left">
                    <img src={data.img} alt={data.title}/>
                </div>
                <div className="item-detail float-left">
                    <h3 className="item-title">{data.title}</h3>
                    <p className="item-sub-title">{data.subTitle}</p>
                    <h3 className="item-price">￥{data.price}</h3>
                    <span className="item-distance">{data.distance}</span>
                    <span className="item-number">已售 {data.mumber}</span>
                </div>
            </div>
        )

    }
}

export default ShowListItem