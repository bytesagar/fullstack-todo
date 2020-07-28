import React, { useState } from 'react';

function Form(props) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }

  function submitTodo(e) {
    e.preventDefault();
    props.saveTodo(e, formData);
    setFormData({
      name: '',
      description: '',
    });
  }

  return (
    <div>
      <form onSubmit={submitTodo}>
        <input
          name="title"
          placeholder="Title"
          value={formData.name}
          id="name"
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Content"
          value={formData.description}
          id="description"
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Form;
