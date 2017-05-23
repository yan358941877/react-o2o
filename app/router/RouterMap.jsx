/* common module */
import React from 'react'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'

/* containers */
import App from '../containers'
import Home from '../containers/Home/'
import City from '../containers/City/'
import Search from '../containers/Search/'
import Detail from '../containers/Detail'
import User from '../containers/User'
import Login from '../containers/Login'
/* components */
import NotFound from '../components/NotFound'
import Test from '../components/Test'

class RouterMap extends React.Component{
    render(){
        return (
            <Router history={hashHistory}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home} />
                    <Route path='/city' component={City} />
                    <Route path='/search/:category(/:keyword)' component={Search} />
                    <Route path='/detail/:id' component={Detail}/>
                    <Route path='/user' component={User} />
                    <Route path='/login' component={Login} />
                    <Route path='*' component={NotFound} />
                </Route>
            </Router>
        )
    }
}

export default RouterMap