import React from 'react'
import './style.less'

class Star extends React.PureComponent{
    render(){
        const total = [1,2,3,4,5]
        const star = this.props.star
        return (
            <div id="star">
                {
                    total.map((index)=>{
                        return <i 
                                className={'icon-star ' +(index<=star?'active':'')}
                                key={index}></i>
                    })
                }
            </div>
        )
    }
}
export default Star