import React from 'react'
import './style.less'
import {getGuessDatas} from '../../../fetch/home'
import ShowList from '../../../components/ShowList'
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
        })
    }
    render(){
        return (
            <div id="guess-container">
                <h2>猜你喜欢</h2>
                {
                    this.state.isLoading
                    ? <p className="info">loading...</p>
                    : <ShowList data = {this.state.data} />
                }
                {
                    this.state.hasMore
                    ? <p>loading...</p>
                    : ''
                }
                
            </div>
        )
    }
}

export default Guess