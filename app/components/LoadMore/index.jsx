import React from 'react'
import './style.less'

class LoadMore extends React.Component {
    constructor(props){
        super(props)
        this.isExposure = this.isExposure.bind(this)
    }
    componentDidMount(){
        window.onscroll = this.debounce(this.isExposure, 100)
    }
    debounce(fn, delay){
        let timer = null

        return function(){
            // 当使用时，这里的this指的是绑定的具体element
            
            let context = this
            let args = arguments
            clearTimeout(timer)
            timer = setTimeout(function(){
                console.log('aaaa')
                fn.apply(context, args)
            }, delay)
        }
    }
    isExposure(){
        let window_height = window.innerHeight
        let document_scroll = document.body.scrollTop
        let element_top = this.loadmore.offsetTop
        if(element_top-document_scroll<=window_height){
            //console.log('出现啦~~~')
           this.props.sendRequest()
        }
    }
    render() {
        return (

            <div id="loadmore" ref={(loadmore) => this.loadmore = loadmore}>
                {
                    this.props.hasMore
                        ? 'loading...'
                        : '加载完毕'
                }
            </div>

        )
    }
}

export default LoadMore