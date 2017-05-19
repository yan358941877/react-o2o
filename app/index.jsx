import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import configureStore from './store/configureStore'
import RouterMap from './router/RouterMap'

import './static/css/common.less'
import './static/css/font.css'

let initState = {}
const store = configureStore(initState)




render(
    <Provider store={store}>
        <RouterMap />
    </Provider>,
    document.getElementById('root')
)