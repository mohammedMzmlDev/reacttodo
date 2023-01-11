import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
function  Todo({todos, completeTodo}) {
    console.log('todos',todos);
    const [edit, setEdit] = useState({
        id : null,
        value : ''
    });

    const removeTodo = (id) => {
        console.log('todos bfr del',todos);
        const newTodos = todos.filter((el) => el.id !== id);
        todos = newTodos;
        console.log('todos after del',todos);
    }
    
    const editTodo = (id) => {
        console.log('todo to edit ',id);
    }
    return todos.map((todo,index) => (
        // console.log('todo is',todo);
        // console.log('index is',index);
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className='icons'>
                <RiCloseCircleLine
                    onClick={() => removeTodo(todo.id)}
                />
                <TiEdit onClick={() => editTodo(todo.id)}/>
            </div>
        </div>
    ))
}

export default Todo