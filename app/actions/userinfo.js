import * as actionTypes from '../constants/userinfo'

// ActionCreator 动作产生器--->向指定的方法传递数据，生成对应的action
export function updateCityName(data){
    return {
        type: actionTypes.USERINFO_UPDATE_CITYNAME,
        data: data
    }
}