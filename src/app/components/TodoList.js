import React from 'react';

const TodoList = ({todos}) => {
    return(
        <ul>
            {todos.map((todo) =>(
                <li key = {todo.id}>
                    <span>{todo.text}</span>
                    <button> Edit </button>
                    <button> Delete</button>
                    
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
