import React, { useState } from 'react'

const TodoList = () => {

    const [todos, setTodos] = useState([]);

    const [inputValue, setInputValue] = useState("");

    const handleClick = (e)=> {
        e.preventDefault();

        if(inputValue.trim()) {
            setTodos([...todos, inputValue]);
            setInputValue("");
        }
    }

    const handleChange = (e)=> {
        setInputValue(e.target.value);
    }

  return (
    <>
        <h1>Todo List</h1>
        <form onSubmit={handleClick}>
            <input type="text" value={inputValue} onChange={handleChange} placeholder='Add a new todo' />
            <button type='submit'>Add todo</button>
        </form>


        <ul>
            {todos.map(
                (todo, index) => (
                    <li key={index}>{todo}</li>
                )
            )}
        </ul>
    </>
  )
}

export default TodoList