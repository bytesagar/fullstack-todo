const router = require('express').Router();
const {
  getTodos,
  postTodo,
  updateTodo,
  deleteTodo,
} = require('../controller/todo');

router.get('/todos', getTodos);

router.post('/add-todo', postTodo);

router.put('/edit-todo/:id', updateTodo);

router.delete('/delete-todo/:id', deleteTodo);

module.exports = router;
