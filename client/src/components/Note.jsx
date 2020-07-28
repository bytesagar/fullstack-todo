import React from 'react';

function Note({ todo, deleteTodo, updateTodo }) {
  const checkTodo = todo.status ? `line-through` : '';

  return (
    <div className="note">
      <h1 className={checkTodo}>{todo.name}</h1>
      <p className={checkTodo}>{todo.description}</p>
      <button onClick={() => deleteTodo(todo._id)} className="del-btn">
        Delete
      </button>
      <button
        onClick={() => updateTodo(todo)}
        className={todo.status ? 'hide-btn' : ''}
      >
        Completed
      </button>
    </div>
  );
}

export default Note;
