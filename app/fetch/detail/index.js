import get from '../get'

export function getDetailInfo(id){
    const result = get('/api/detail/id')
    return result
}