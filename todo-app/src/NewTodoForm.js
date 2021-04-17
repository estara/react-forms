import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

const NewTodoForm = (props) => {
    const INITIAL_STATE = {task: ""};
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleSubmit = evt => {
        evt.preventDefault();
        props.addTask({ ...formData, id: uuid() });
        setFormData(INITIAL_STATE);
      };

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(formData => ({
          ...formData,
          [name]: value
        }));
      };

    return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">New Task:</label>
      <input
        id="task"
        name="task"
        value={formData.task}
        onChange={handleChange}
      />
      <button>Add a new task!</button>
    </form>
  );
}

export default NewTodoForm;