import React, { useState, useEffect } from 'react';
import Header from './Header';
import Note from './Note';
import Form from './Form';
import { getTodos, addTodo, deleteTodo, updateTodo } from '../API';

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = () => {
    getTodos()
      .then((res) => res.json())
      .then(({ todos }) => setTodos(todos))
      .catch((err) => console.log(err));
  };

  const handleSaveTodo = (e, formData) => {
    e.preventDefault();
    addTodo(formData)
      .then((res) => res.json())
      .then((data) => setTodos(data.todos))
      .catch((err) => console.log(err));
  };

  const handleUpdateTodo = (todo) => {
    updateTodo(todo)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTodos(data.todos);
      })
      .catch((err) => console.log(err));
  };
  const handleDelete = (id) => {
    deleteTodo(id)
      .then((res) => res.json())
      .then((data) => setTodos(data.todos))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Header />
      <Form saveTodo={handleSaveTodo} />
      <div className="note-container">
        {todos.map((todo) => {
          return (
            <Note
              key={todo._id}
              todo={todo}
              deleteTodo={handleDelete}
              updateTodo={handleUpdateTodo}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
