import React, { useState } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const handleChange = (id) => {
        setTodos(prevTodos => {
            return prevTodos.map(todo => {
                if (todo.id === id) {
                    return {...todo, completed: !todo.completed}
                }
                return todo
            })
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTodo.trim() !== '') {
            setTodos(prevTodos => [...prevTodos, {id: Date.now(), text: newTodo, completed: false}]);
            setNewTodo('');
        }
    }

    return (
        <div className="todo-list">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Add a new todo"
                />
                <button type="submit">Add</button>
            </form>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    item={todo}
                    handleChange={handleChange}
                />
            ))}
        </div>
    );
}

export default TodoList;
