import React from 'react'
import HomeAdItem from '../HomeAdItem'
import './style.less'
// 负责展示首页的广告
class HomeAd extends React.PureComponent {
    render() {

        const datas = this.props.datas
        return (
            <div id="ad-container" className=" clear-fix">
                {
                    this.props.datas
                        ? this.props.datas.map((item, index) => {
                            return <HomeAdItem data={item} key={index} />
                        })
                        : ''
                }

            </div>
        )
    }
}

export default HomeAd
