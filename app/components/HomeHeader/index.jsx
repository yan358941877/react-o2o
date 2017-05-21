import React from 'react'
import './style.less'

import {Link,hashHistory} from 'react-router'

class HomeHeader extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            inputContent: ''
        }
    }

    handleInputChange(event){
        let inputContent = event.target.value
        this.setState({
            inputContent
        })
    }
    handleKeyPress(event){
        if(this.state.inputContent.length===0){
            return 
        }
        if(event.charCode == 13){
            hashHistory.push(this.props.linkto+this.state.inputContent)
        }
    }
    render(){
        return (
            <div id="home-header">
                <div className="float-left cityName">
                    <Link to='/city'>
                    <span>{this.props.cityName}</span>
                    <i className="icon-angle-down"></i>
                    </Link>
                </div>
                <div className="float-right userinfo">
                    <Link to='/user'><i className="icon-user"></i></Link>
                </div>
                <div className="header-input">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        <input 
                            type="text" 
                            placeholder="请输入关键词" 
                            onChange={this.handleInputChange.bind(this)} 
                            value={this.state.inputContent}
                            onKeyPress={this.handleKeyPress.bind(this)}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeHeader