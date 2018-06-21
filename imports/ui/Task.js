import React, { Component } from 'react';
import EditableText from './EditableText';
import TodoList from './TodoList';
import AddButton from './AddButton';
import {Tasks} from '../api/tasks';
import {Todos} from '../api/todos';
import { withTracker } from 'meteor/react-meteor-data';
import { Dropdown } from 'semantic-ui-react';

class Task extends Component {

    usersToListElem = () => {
        return this.props.users.map(({name, imgUrl}) => ({
            text: name, image: imgUrl, value: name
        }))
    }

    nameToUser = name => this.props.users.find(e => e.name === name);

    removeTask = () => {
        Tasks.remove(this.props.task._id);
    }

    addTodo = () => {
        const todo = {
            taskId: this.props.task._id,
            content: "Wash my socks",
            status: "TODO"
        }
        Todos.insert(todo)
    }

    changeTitle = newTitle => {
        Tasks.update(this.props.task._id, {$set: {title: newTitle}});
    }

    changeUser = (e, {value}) => {
        const user = this.nameToUser(value);
    }

    render() {
        const {task, todos} = this.props;
        return (
            <div className={'task'}>
                <button onClick={this.removeTask}><i className={'fas fa-trash'}></i></button>
                <EditableText
                    changeFn={this.changeTitle}
                    size={'MEDIUM'}
                    content={task.title}
                />
                {/* <h3>{task.user.name}</h3>
                <Dropdown
                    onChange={this.changeUser}
                    fluid
                    selection
                    options={this.usersToListElem()}
                /> */}
                <TodoList
                    todos={todos}
                />
                <AddButton size={'SMALL'} addFn={this.addTodo}/>
            </div>
        )
    }
}

export default withTracker(({task}) => {
    return {todos: Todos.find({taskId: task._id}).fetch()}
})(Task);