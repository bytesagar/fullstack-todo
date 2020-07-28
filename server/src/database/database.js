const mongoose = require('mongoose');

const connectToDb = async () => {
  try {
    const connect = await mongoose.connect('mongodb://localhost:27017/todo', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    if (connect) console.log(`Database connected successfully`);
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectToDb;
