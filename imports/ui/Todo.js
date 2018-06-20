import React from 'react'

const Todo = ({toggleCheckFn, removeFn, todo={content: 'test'}}) => (
    <div className={'todo'}>
        <h3>{todo.content}</h3>
        <button onClick={toggleCheckFn}>
            {
                todo.status === 'TODO' ?
                    <i className={'fas fa-check'}></i> :
                    <i className={'fas fa-wrench'}></i>
            }
        </button>
        <button onClick={removeFn}>
            <i className={'fas fa-trash'}></i>
        </button>
    </div>
)

export default Todo;