import React from 'react'
import './style.less'

class CurrentCity extends React.PureComponent{
    render(){
        return(
            <div className="current-city">
                <h1>{this.props.cityName}</h1>
            </div>
        )
    }
}

export default CurrentCity