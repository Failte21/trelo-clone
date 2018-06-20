import React from 'react';
import Todo from './Todo';

const TodoList = ({toggleCheckFn, removeFn, todos, changeFn}) => (
    <div className={'todo-list'}>
        {todos.map((todo, i) => (
            <Todo
                key={i}
                todo={todo}
                toggleCheckFn={toggleCheckFn}
                removeFn={removeFn}
                changeFn={changeFn}
            />
        ))}
    </div>
)

export default TodoList;