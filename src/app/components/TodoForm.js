import React, { useState } from 'react';
import './TodoForm.module.css';

const TodoForm = ({ addTodo }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text) return;
        addTodo(text);
        setText('');
    };


    return (
        <div className='container'>
            <h1> To - Do - List App </h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder='Add your task...'
                />
                <button type='submit'> Add </button>
            </form>
        </div>
    );
};


export default TodoForm;

