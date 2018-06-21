import React from 'react';
import Todo from './Todo';

const TodoList = ({todos}) => {
    console.log({todos})
    return (
        <div className={'todo-list'}>
            {todos.map((todo) => (
                <Todo
                    key={todo._id}
                    todo={todo}
                />
            ))}
        </div>
    )
}

export default TodoList;