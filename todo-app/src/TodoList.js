import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm.js';
import Todo from './Todo.js';


function TodoList() {
    const [tasks, setTasks] = useState([]);

    const removeTask = id => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };
      
    const addTask = task => {
    setTasks(tasks => [...tasks, task]);
    };

    const renderList = () => {
        return (
          <div>
            {tasks.map(task => (
              <Todo key={task.id} 
              id={task.id} 
              handleRemove={removeTask} 
              task={task.task}/>
            ))}
          </div>
        );
    };
    
    return (
        <div className="TodoList">
          <NewTodoForm addTask={addTask} />
          {renderList()}
        </div>
      );
}

export default TodoList;