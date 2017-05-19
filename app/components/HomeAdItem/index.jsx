import React from 'react'
import './style.less'

class HomeAdItem extends React.PureComponent{

    render(){
        const data = this.props.data
        return (
            <div className="home-ad-item float-left">
                <img title={data.title} alt={data.title} src={data.img}/>
            </div>
        )
    }
}

export default HomeAdItem