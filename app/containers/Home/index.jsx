/*commen module*/
import React from 'react'
import {connect }  from 'react-redux'

/* style*/
import './style.less'

/*contianer*/
import Ad from './subpage/Ad.jsx'
import Guess from './subpage/Guess.jsx'
/*component*/
import HomeHeader from '../../components/HomeHeader'
import Category from '../../components/Category'

class Home extends React.Component{
    render(){
        return (
            <div id="home">
                <HomeHeader cityName={this.props.userinfo.cityName} />
                <Category />
                <Ad />
                <Guess />
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        userinfo: state.userinfo
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {

    }
}
Home = connect(mapStateToProps,mapDispatchToProps)(Home)
export default Home