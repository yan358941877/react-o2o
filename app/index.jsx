import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import configureStore from './store/configureStore'

let initState = {}
const store = configureStore(initState)
//import RouterMap from './router/RouterMap'



render(
    <Provider store={store}>
        <div>hello world</div>
    </Provider>,
    document.getElementById('root')
)