import React, { Component } from 'react';
import EditableText from './EditableText';
import UserIcon from './UserIcon';
import AddButton from './AddButton';
import Task from './Task';
import { withTracker } from 'meteor/react-meteor-data';
import { Tasks } from '../api/tasks.js';

const changeFn = e => console.log(e)

const addTodoFn = () => {
    console.log('add todo');
}

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

const users = [homer, snoopy, bojack];

const todo = {
    content: 'clean my socks',
    status: 'DONE'
}

const task = {
    title: 'First task',
    user: users[0],
    todos: [todo]
}

const tasks = [task];

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
    render () {
        return (
            <div className={'app'}>
                {/*<h1>UI Playground</h1>*/}

                {/*<h3>EditableText</h3>*/}
                {/*<EditableText changeFn={changeFn} content={'test'} size={'LARGE'}/>*/}
                {/*<EditableText changeFn={changeFn} content={'test'} size={'MEDIUM'}/>*/}
                {/*<EditableText changeFn={changeFn} content={'test'} size={'SMALL'}/>*/}

                {/*<h3>UserIcon</h3>*/}
                {/*<UserIcon user={users[0]} size={'LARGE'}/>*/}
                {/*<UserIcon user={users[1]} size={'MEDIUM'}/>*/}
                {/*<UserIcon user={users[2]} size={'SMALL'}/>*/}

                {/*<h3>Add button</h3>*/}
                {/*<AddButton addFn={() => console.log('add')} size={'LARGE'}/>*/}
                {/*<AddButton addFn={() => console.log('add')} size={'MEDIUM'}/>*/}
                {/*<AddButton addFn={() => console.log('add')} size={'SMALL'}/>*/}

                {/*<h3>Task</h3>*/}
                {/*<Task*/}
                    {/*task={task}*/}
                    {/*users={users}*/}
                    {/*changeUserFn={changeUserFn}*/}
                    {/*toggleCheckFn={toggleCheckFn}*/}
                    {/*removeFn={removeFn}*/}
                    {/*changeTodoFn={changeTodoFn}*/}
                    {/*addTodoFn={addTodoFn}*/}
                {/*/>*/}
                <div className={'top-bar'}>
                    <EditableText changeFn={changeFn} content={'TITLE'} size={'LARGE'}/>
                    <div className={'users-container'}>
                        {users.map((user, i) => <UserIcon key={i} user={user} size={'SMALL'}/>)}
                        <AddButton addFn={addTodoFn} size={'SMALL'}/>
                    </div>
                </div>
                <div className={'task-container'}>
                    {this.props.tasks.map(task =>
                        <Task
                            task={task}
                            users={users}
                            changeUserFn={changeUserFn}
                            toggleCheckFn={toggleCheckFn}
                            removeFn={removeFn}
                            changeTodoFn={changeTodoFn}
                            addTodoFn={addTodoFn}
                        />
                    )}
                </div>
            </div>
        )
    }
}

export default withTracker(() => ({tasks: Tasks.find().fetch()}))(App);
// export default App;