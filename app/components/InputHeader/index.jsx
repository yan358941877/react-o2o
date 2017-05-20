import React from 'react'
import './style.less'
import {hashHistory} from 'react-router'
class InputHeader extends React.PureComponent {
    constructor(props){
        super(props)
        this.state = {
            inputContent: ''
        }
    }
    handleBack(){
        window.history.back()
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
        if(event.charCode == 13&&this.props.handleInputSubmit){
            this.props.handleInputSubmit(this.state.inputContent)
        }
    }
    render() {
        return (
            <div id="input-header">
                <i className="icon-chevron-left" onClick={this.handleBack.bind(this)}></i>
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

export default InputHeader