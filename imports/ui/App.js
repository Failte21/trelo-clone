import React, { Component } from 'react';
import EditableText from './EditableText';
import UserIcon from './UserIcon';
import AddButton from './AddButton';
import Task from './Task';
import { withTracker } from 'meteor/react-meteor-data';
import { Tasks } from '../api/tasks.js';
import {Users} from '../api/users'

const changeFn = e => console.log(e)

const addTodoFn = () => {
    console.log('add todo');
}


//mock for users
const homer = {
    name: "Homer Simpson",
    imgUrl: "http://interactive.nydailynews.com/2016/05/simpsons-quiz/img/simp1.jpg"
}

const snoopy = {
    name: "Snoopy",
    imgUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Snoopy_Peanuts.png/200px-Snoopy_Peanuts.png"
}

const bojack = {
    name: "Bojack Horseman",
    imgUrl: "https://s.yimg.com/ny/api/res/1.2/qqTBZv8W.JBeMMhgSn6iJQ--/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://l.yimg.com/cd/resizer/2.0/original/SrKSspxPimv7uh39-rEOEE6yPT8"
}

// const users = [homer, snoopy, bojack];

const changeTodoFn = (e) => {
    console.log('rename todo: ', e);
}

const changeUserFn = (e, {value}) => {
    console.log(value);
}

const toggleCheckFn = () => {
    console.log('check todo');
}

const removeFn = () => {
    console.log('remove todo');
}

class App extends Component {

    addTask = () => {
        Tasks.insert({title: "New task", user: this.props.users[0]})
    }

    addUser = () => {
        Users.insert(homer);
    }

    render () {
        return (
            <div className={'app'}>
                <div className={'top-bar'}>
                    <EditableText changeFn={changeFn} content={'TITLE'} size={'LARGE'}/>
                    {/*<div className={'users-container'}>
                        {this.props.users.map(user => <UserIcon key={user._id} user={user} size={'SMALL'}/>)}
                        <AddButton addFn={this.addUser} size={'SMALL'}/>
                    </div>*/}
                </div>
                <div className={'task-container'}>
                    {this.props.tasks.map(task =>
                        <Task
                            key={task._id}
                            task={task}
                            users={this.props.users}
                            changeUserFn={changeUserFn}
                            toggleCheckFn={toggleCheckFn}
                            removeFn={removeFn}
                            changeTodoFn={changeTodoFn}
                            addTodoFn={addTodoFn}
                        />
                    )}
                    <AddButton size={'MEDIUM'} addFn={this.addTask}/>
                </div>
            </div>
        )
    }
}

export default withTracker(()=> ({
    users: Users.find().fetch(),
    tasks: Tasks.find().fetch()
}))(App);
// export default App;
