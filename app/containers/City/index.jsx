/*module */
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

/*style */
import './style.less'

/* component */
import CommonHeader from '../../components/CommonHeader'
import CityList from '../../components/CityList'
import CurrentCity from '../../components/CurrentCity'

/* other */
import * as actionCreator_userinf from '../../actions/userinfo'

class City extends React.Component{
    
    render(){
        
        return (
            <div id="choose-city">
                <CommonHeader title='选择城市'/>
                <CurrentCity cityName= {this.props.userinfo.cityName} />
                <CityList changeCity= {this.props.operateUserinfo.updateCityName}/>
            </div>
        )
    }
}

const mapStateToProps= (state) =>{
    return {
        userinfo: state.userinfo
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        operateUserinfo: bindActionCreators(actionCreator_userinf, dispatch)
    }
}

City = connect(mapStateToProps, mapDispatchToProps)(City)
export default City