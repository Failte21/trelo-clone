import React, { Component } from 'react';
import EditableText from './EditableText';
import TodoList from './TodoList';
import AddButton from './AddButton';
import {Tasks} from '../api/tasks';
import {Todos} from '../api/todos';
import { withTracker } from 'meteor/react-meteor-data';

class Task extends Component {

    usersToListElem = users => {
        return users.map(({name, imgUrl}) => ({
            text: name, image: imgUrl, value: name
        }))
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

    render() {
        const {task, removeFn, toggleCheckFn, todos, changeTodoFn, addTodoFn} = this.props;
        console.log({todos})
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
                    todos={todos}
                    removeFn={removeFn}
                />
                <AddButton size={'SMALL'} addFn={this.addTodo}/>
            </div>
        )
    }
}

export default withTracker(({task}) => {
    console.log(task._id.valueOf())
    return {todos: Todos.find({taskId: task._id}).fetch()}
})(Task);