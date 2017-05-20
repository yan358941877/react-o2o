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
            data: [],
            a: 0
        }

    }
    // componentDidMount(){ 
    //    this.sendRequest()
    // }
    
    // componentWillReceiveProps(){
    //     this.setState({
    //         a: 5
    //     })
    // }
    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('bbb'+ this.state.a)
    //     console.log('aa'+nextState.a)
    //     return true
    // }
    // 当用户在输入框中输入了关键字，则Search组件的状态发生变化，导致组件的更新，进而导致当前组件的更新
    // 由于用户要搜索新的内容，因此，当前组件中展现的内容应该全部删除，重新请求新的数据
    componentDidUpdate(prevProps, prevState){
        // 在componetDidUpdate中，this.props是更新过后的props

        const category = this.props.category
        const keyword = this.props.keyword
        if(category===prevProps.category&& keyword===prevProps.keyword){
            return 
        }else {
            
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