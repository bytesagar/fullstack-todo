const baseURL = 'http://localhost:3100';

const getTodos = async () => {
  try {
    const todos = await fetch(`${baseURL}/todos`);
    return todos;
  } catch (error) {
    throw new Error(error);
  }
};

const addTodo = async (formData) => {
  try {
    const todo = {
      name: formData.name,
      description: formData.description,
      status: false,
    };

    const saveTodo = await fetch(`${baseURL}/add-todo`, {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    });
    return saveTodo;
  } catch (error) {
    throw new Error(error);
  }
};

const updateTodo = async (todo) => {
  try {
    const todoUpdate = {
      status: true,
    };

    const updatedTodo = await fetch(`${baseURL}/edit-todo/${todo._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todoUpdate),
    });

    return updatedTodo;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteTodo = async (id) => {
  try {
    const deletedTodo = await fetch(`${baseURL}/delete-todo/${id}`, {
      method: 'DELETE',
    });
    return deletedTodo;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { getTodos, addTodo, updateTodo, deleteTodo };
