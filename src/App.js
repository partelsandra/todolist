import React, { useState } from 'react';
import TodoList from './TodoList';
import './index.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
      <div className="container">
        <h1>To-Do List</h1>
        <TodoList tasks={tasks} addTask={addTask} completeTask={completeTask} deleteTask={deleteTask} />
      </div>
  );
}

export default App;
