import React from 'react'
import './style.less'

import ShowList from '../../../components/ShowList'
import LoadMore from '../../../components/LoadMore'

import {getSearchResult} from '../../../fetch/search'

class SearchResult extends React.Component{
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
    componentWillUpdate(prevProps, prevState){
        const category = this.props.category
        const keyword = this.props.keyword

        if(category===prevProps.category&& keyword===prevProps.keyword){
            return 
        }else {
            console.log('new keyword')
            this.setState({
                data: [],
                page: 0
            })
            this.sendRequest()
        }
    }
    sendRequest(){
        if(this.state.isLoading){
            return 
        }
        this.setState({
            isLoading: true
        })
        const response = getSearchResult(this.props.category, this.state.keyword, this.state.page)
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
            <div id="search-result">
                {
                    this.state.data.length
                    ? <ShowList data = {this.state.data} />
                    : <p className="info">loading...</p>
                }
                {
                    this.state.data.length
                    ? <LoadMore hasMore={this.state.hasMore} sendRequest={this.sendRequest.bind(this)}/>
                    : ''
                }    
            </div>
        )
    }
}

export default SearchResult