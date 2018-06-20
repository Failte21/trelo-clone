import React from 'react';
import '../stylesheets/main.scss';
import EditableText from './EditableText'

const Todo = ({toggleCheckFn, removeFn, todo, changeFn}) => (
    <div className={'todo'}>
        <EditableText size={'SMALL'} content={todo.content} changeFn={changeFn}/>
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