import React, { Component } from 'react';
import EditableText from './EditableText'

const changeFn = e => console.log(e)

class App extends Component {
    render () {
        return (
            <div>
                <h1>UI Playground</h1>
                <h3>EditableText</h3>
                <EditableText changeFn={changeFn} content={'test'} size={'LARGE'}/>
                <EditableText changeFn={changeFn} content={'test'} size={'MEDIUM'}/>
                <EditableText changeFn={changeFn} content={'test'} size={'SMALL'}/>
            </div>
        )
    }
}

export default App;