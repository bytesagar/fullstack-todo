const Todo = require('../database/Model/Todo');

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json({ todos });
  } catch (error) {
    throw error;
  }
};

const postTodo = async (req, res) => {
  try {
    const { name, description, status } = req.body;
    const todo = new Todo({
      name,
      description,
      status,
    });

    const newTodo = await todo.save();
    const allTodos = await Todo.find();
    res
      .status(200)
      .json({ message: 'Todo added', todo: newTodo, todos: allTodos });
  } catch (error) {
    throw error;
  }
};

const updateTodo = async (req, res) => {
  try {
    const { body } = req;
    const updateTodo = await Todo.findByIdAndUpdate(
      { _id: req.params.id },
      body
    );
    const allTodos = await Todo.find();

    res
      .status(200)
      .json({ message: 'Todo updated', todo: updateTodo, todos: allTodos });
  } catch (error) {
    throw error;
  }
};

const deleteTodo = async (req, res) => {
  try {
    const deletedTodo = await Todo.findByIdAndRemove(req.params.id);
    const allTodos = await Todo.find();

    res
      .status(200)
      .json({ message: 'Todo deleted', todo: deletedTodo, todos: allTodos });
  } catch (error) {
    throw error;
  }
};

module.exports = { getTodos, postTodo, updateTodo, deleteTodo };
