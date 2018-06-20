import React, { Component } from 'react';
import EditableText from './EditableText';
import { Dropdown } from 'semantic-ui-react';
import TodoList from './TodoList';
import AddButton from './AddButton';
import {Tasks} from '../api/tasks';
import {Todos} from '../api/todos'

class Task extends Component {

    usersToListElem = users => {
        return users.map(({name, imgUrl}) => ({
            text: name, image: imgUrl, value: name
        }))
    }

    addTodo = () => {
        const { todos = [] } = this.props.task;
        const lastTodo = todos[todos.length - 1] || {};
        const id = lastTodo.id + 1 || 1;
        const todo = {id, content: 'Wash my socks', status: 'TODO'}
        console.log({todo})
        Tasks.update(this.props.task._id, {$push: {todos: todo}})
    }

    changeTitle = newTitle => {
        Tasks.update(this.props.task._id, {$set: {title: newTitle}});
    }

    render() {
        const {task, removeFn, toggleCheckFn, changeUserFn, changeTodoFn, addTodoFn} = this.props;
        return (
            <div className={'task'}>

                <EditableText
                    changeFn={this.changeTitle}
                    size={'MEDIUM'}
                    content={task.title}
                />
                {/*<h3>{task.user.name}</h3>*/}
                {/*<Dropdown*/}
                    {/*selected={'snoopy'}*/}
                    {/*onChange={changeUserFn}*/}
                    {/*fluid*/}
                    {/*selection*/}
                    {/*options={this.usersToListElem(this.props.users)}*/}
                {/*/>*/}
                <TodoList
                    changeFn={changeTodoFn}
                    toggleCheckFn={toggleCheckFn}
                    todos={task.todos}
                    removeFn={removeFn}
                />
                <AddButton size={'SMALL'} addFn={this.addTodo}/>
            </div>
        )
    }
}

export default Task;