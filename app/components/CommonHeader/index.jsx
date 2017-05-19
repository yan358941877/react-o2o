import React from 'react'
import './style.less'
import {hashHistory} from 'react-redux'

class CommonHeader extends React.PureComponent{

    handleCilickBack(){
        window.history.back()
    }
    render(){
        return(
            <div className="common-header">
                <i className='icon icon-chevron-left' onClick={this.handleCilickBack}></i>
                <h1 className='common-header-title'>{this.props.title}</h1>
            </div>
        )
    }
}

export default CommonHeader
