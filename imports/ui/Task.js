import React, { Component } from 'react'
import EditableText from './EditableText'
import { Dropdown } from 'semantic-ui-react'
import TodoList from './TodoList'

class Task extends Component {

    usersToListElem = users => {
        return users.map(({name, imgUrl}) => ({
            text: name, image: imgUrl, value: name
        }))
    }
    render() {
        const {task, removeFn, toggleCheckFn, changeUserFn} = this.props;
        return (
            <div className={'task'}>

                <EditableText
                    changeFn={e => console.log(e)}
                    size={'MEDIUM'}
                    content={task.title}
                />
                <h3>{task.user.name}</h3>
                <Dropdown
                    selected={'snoopy'}
                    onChange={changeUserFn}
                    fluid
                    selection
                    options={this.usersToListElem(this.props.users)}
                />
                <TodoList toggleCheckFn={toggleCheckFn} todos={task.todos} removeFn={removeFn}/>
            </div>
        )
    }
}

export default Task;