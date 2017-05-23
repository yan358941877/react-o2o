import * as actionTypes from '../constants/collect'

export function addCollect(id){
    return {
        type: actionTypes.ADD_COLLECT,
        data: id
    }
}

export function cancelCollect(id){
    return {
        type: actionTypes.CANCEL_COLLECT,
        data: id
    }
}