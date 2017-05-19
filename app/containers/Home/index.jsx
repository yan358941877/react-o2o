/*commen module*/
import React from 'react'
import {connect }  from 'react-redux'

/* style*/
import './style.less'

/*contianer*/

/*component*/
import HomeHeader from '../../components/HomeHeader'

class Home extends React.Component{
    render(){
        return (
            <div id="home">
                <HomeHeader cityName={this.props.userinfo.cityName} />
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