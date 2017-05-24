import get from '../get'

export function getOrderList(username){
    const result = get('/api/order/'+encodeURIComponent(username))
    return result
}