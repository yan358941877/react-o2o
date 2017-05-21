import get from '../get'

export function getDetailInfo(id){
    const result = get('/api/detail/'+ id)
    return result
}

export function getSellerComment(id,page){
    const result = get('/api/detail/comment/' +id+ '/'+page)
    return result
}