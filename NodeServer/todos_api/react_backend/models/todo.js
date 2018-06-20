const mongoose = require("mongoose");
mongoose.connect("mongodb://mongo/todos-backend-data")
mongoose.set('debug', true);
mongoose.Promise = Promise;

const todoSchema = new mongoose.Schema({
  task: String
})

const Todo = mongoose.model("Todo", todoSchema)

module.exports = Todo;
