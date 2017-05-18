import 'whatwg-fetch'
import 'es6-promise'

export default function(url){
    const result = fetch(url, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        // 注意post时候参数的形式
        body: "a=100&b=200"
    })
}