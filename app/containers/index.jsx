import React from 'react'

class App extends React.Component {
    render(){
        return (
            <div id="app">
                <h1>App Header</h1>
                {this.props.children}
            </div>
        )
    }
}

export default App