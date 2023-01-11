import React, {useState} from 'react'

function TodoForm(props) {
    const [input,setInput] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id : Math.floor(Math.random()* 10000),
            text : input
        })
        setInput('')
    };
    const onChangeDummy = e => {
        setInput(e.target.value)
    }
    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            {/* <input 
            type="text" 
            placeholder='Add a todo'
            value={input}
            name="text"
            className='todo-input'
            /> */}
            <input type="text" placeholder='Add a todo' name="text" value={input} onChange={onChangeDummy}/>
            <button className='todo-button'>Add todo</button>
        </form>
    )
}

export default TodoForm