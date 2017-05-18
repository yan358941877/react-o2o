import React from 'react'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'

import App from '../containers'
import Test from '../components/Test'
import NotFound from '../components/NotFound'

class RouterMap extends React.Component{
    render(){
        return (
            <Router history={hashHistory}>
                <Route path='/' component={App}>
                    <IndexRoute component={Test} />
                    <Route path='*' component={NotFound} />
                </Route>
            </Router>
        )
    }
}

export default RouterMap