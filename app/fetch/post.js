import 'whatwg-fetch'
import 'es6-promise'

// 将对象拼接成 key=value&key2=value2的字符串形式

function obj2params(obj){
    var result = ''
    var item
    for(item in obj){
        result +='&'+item+ '=' + encodeURIComponent(obj[item])
    }

    if(result){
        // 去掉第一个&符号
        result = result.slice(1)
    }

    return result
}

export default function(url, paramsObj){
    const result = fetch(url, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        // 注意post时候参数的形式
        body: obj2params(paramsObj)
    })

    return result
}