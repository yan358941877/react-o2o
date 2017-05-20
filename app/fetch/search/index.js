import get from '../get'

export function getSearchResult(category, keyword, page){
    const result = get('/api/search/'+encodeURIComponent(category)+'/'+encodeURIComponent(keyword) + '/'+page)
    return result
}