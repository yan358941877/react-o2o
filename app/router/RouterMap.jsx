import React from 'react'
import {Router, Route, hasHistory} from 'react-router'

class RouterMap extends React.Component{
    render(){
        return (
            <Router history={hasHistory}>
            </Router>
        )
    }
}