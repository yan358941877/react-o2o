import * as actionTypes from '../constants/userinfo'
import _extends from '../utils/_extends'

const initState = {}
export default function(state=initState,action){
    switch(action.type){
        case actionTypes.USERINFO_UPDATE_CITYNAME:
            return _extends({},state, {cityName: action.data})
        default: 
            return state
    }

}