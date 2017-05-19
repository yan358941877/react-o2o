/* common module */
import React from 'react'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'

/* containers */
import App from '../containers'
import Home from '../containers/Home/'

/* components */
import NotFound from '../components/NotFound'
import Test from '../components/Test'

class RouterMap extends React.Component{
    render(){
        return (
            <Router history={hashHistory}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home} />
                    <Route path='*' component={NotFound} />
                </Route>
            </Router>
        )
    }
}

export default RouterMap