import React, {Component} from 'react';
import '../stylesheets/main.scss';
import EditableText from './EditableText';
import {Todos} from '../api/todos'

class Todo extends Component {

    toggleCheck = () => {
        const status = this.props.todo.status === 'TODO' ? 'DONE' : 'TODO';
        Todos.update(this.props.todo._id, {$set: {status: status}})
    }

    removeTodo = () => {
        Todos.remove(this.props.todo._id);
    }

    renameTodo = newName => {
        Todos.update(this.props.todo._id, {$set: {content: newName}})
    }

    render() {
        return (
            <div className={'todo'}>
                <EditableText size={'SMALL'} content={this.props.todo.content} changeFn={this.renameTodo}/>
                <button onClick={this.toggleCheck}>
                    {
                        this.props.todo.status === 'TODO' ?
                            <i className={'fas fa-check'}></i> :
                            <i className={'fas fa-wrench'}></i>
                    }
                </button>
                <button onClick={this.removeTodo}>
                    <i className={'fas fa-trash'}></i>
                </button>
            </div>
        )
    }
}

export default Todo;