import React from 'react'
import './style.less'
import {getGuessDatas} from '../../../fetch/home'
import ShowList from '../../../components/ShowList'
import LoadMore from '../../../components/LoadMore'
class Guess extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            hasMore: false,
            page: 0,
            isLoading: false,
            data: []
        }
    }
    componentDidMount(){ 
       this.sendRequest()
    }

    sendRequest(){
        if(this.state.isLoading){
            return 
        }
        this.setState({
            isLoading: true
        })
        const response = getGuessDatas(this.props.cityName, this.state.page)
        this.handleResponse(response)
    }
    handleResponse(response){
        
        response.then(res=>{
            return res.json()
        }).then(json=>{
            this.setState({
                data: this.state.data.concat(json.data),
                hasMore: json.hasMore,
                page: this.state.page+1,
                isLoading: false
            })
            if(!json.hasMore){
                window.onscroll = null
            }
        })
        
    }
    render(){
        return (
            <div id="guess-container">
                <h2>猜你喜欢</h2>
                {
                    this.state.data.length
                    ? <ShowList data = {this.state.data} />
                    : <p className="info">loading...</p>
                }
                <LoadMore hasMore={this.state.hasMore} sendRequest={this.sendRequest.bind(this)}/>
            </div>
        )
    }
}

export default Guess