const express = require('express');
const connectToDb = require('./database/database');
const cors = require('cors');
const todoRoute = require('./routes/todo');

const app = express();
connectToDb();

//receive json formats
app.use(express.json());
app.use(cors());

app.use(todoRoute);

const PORT = process.env.PORT || 3100;
app.listen(PORT, () => {
  console.log('server running succesfully');
});
