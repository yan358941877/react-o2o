import React from 'react'
import './style.less'

class CityList extends React.PureComponent {
    handleClickCity(event){
        const cityName = event.target.innerText
       
        if(this.props.changeCity){
            this.props.changeCity({cityName})
        }
        window.history.back()
    }
    render() {
        return (
            <div className='city-container'>
                <h2>热门城市</h2>
                <ul className='clear-fix'>
                    {
                        this.props.allcity.map((item, index) => {
                            return <li
                                key={index}
                                className='float-left'
                                onClick={this.handleClickCity.bind(this)}>
                                <span>{item}</span>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

CityList.defaultProps = {
    allcity: ['北京', '上海', '广州', '深圳', '杭州', '天津', '成都', '西安', '重庆', '苏州', '南京', '厦门']
}

export default CityList