import * as actionTypes from '../constants/collect'
import _extends from '../utils/_extends'

const initState = {}

export default function(state = initState, action){
    let collectlist = state.collectlist||[]
    switch(action.type){
        case actionTypes.ADD_COLLECT:
            collectlist.push(action.data)
            return _extends({}, state, {collectlist})
        case actionTypes.CANCEL_COLLECT:
            let index = collectlist.indexOf(action.data)
            collectlist.splice(index)
            console.log(collectlist)
            return _extends({}, state, {collectlist})
        default:
            return state
    }
}