import get from '../get'

// 获取首页推荐广告的方法，
export function getRecommendAd(){
    const result = get('/api/homead')
    return result
}