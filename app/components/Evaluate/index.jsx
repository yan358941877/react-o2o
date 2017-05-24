import React from 'react'
import './style.less'

class Evaluate extends React.PureComponent{
    constructor(props){
        super(props)
        this.state = {
            content: ''
        }
    }
    handleCancelEvaluate(){
        if(this.props.handleCancelEvaluate){
            this.props.handleCancelEvaluate()
        }
    }
    handleSubmitEvaluate(){
        const evaluate_content = this.state.content
        if(this.props.handleSubmitEvaluate){
            this.props.handleSubmitEvaluate(evaluate_content)
        }
    }
    handleContentChange(event){
        const value = event.target.value
        this.setState({
            content: value
        })
    }
    render(){
        return (
            <div className="evaluate-input">
                <textarea name="" id="" cols="40" rows="5" value={this.state.content} onChange={this.handleContentChange.bind(this)}></textarea>
                <div>
                    <span onClick={this.handleSubmitEvaluate.bind(this)}>提交</span>
                    <span onClick={this.handleCancelEvaluate.bind(this)}>取消</span>
                </div>
            </div>
        )
    }
}

export default Evaluate