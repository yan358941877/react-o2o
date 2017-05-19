import React from 'react'
import './style.less'

class HomeHeader extends React.Component{
    render(){
        return (
            <div id="home-header">
                <div className="float-left cityName">
                    <span>{this.props.cityName}</span>
                    <i className="icon-angle-down"></i>
                </div>
                <div className="float-right userinfo">
                    <i className="icon-user"></i>
                </div>
                <div className="header-input">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        <input type="text" placeholder="请输入关键词"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeHeader