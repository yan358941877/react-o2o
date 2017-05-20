import React from 'react'
import './style.less'

import InputHeader from '../../components/InputHeader'
import SearchResult from './subpage/SearchResult'
class Search extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            category: this.props.params.category,
            keyword: this.props.params.keyword
        }
    }
    changeState(category, keyword){
        this.setState({
             keyword
        })
    }
    render(){
        let category = this.state.category
        let keyword = this.state.keyword
        return (
            <div id='search-subpage'>
                <InputHeader handleInputSubmit={this.changeState.bind(this)}/>
                <SearchResult category={category} keyword={keyword}/>
            </div>
            
        )
    }
}

export default Search