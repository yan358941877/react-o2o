import React from 'react'
import './style.less'
import ShowListItem from '../ShowListItem'
class ShowList extends React.PureComponent{
    render(){
        const data = this.props.data
        return(
            <div id="show-list">
                {
                    data
                    ? data.map((item,index)=>{
                        return <ShowListItem data={item} key={index} />
                    })
                    : ''
                }
            </div>
        )
    }
}

export default ShowList