const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://saivenkatpokala:pokalapokala123@cluster0.qzbs0ft.mongodb.net/todo-app')
const ToDoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
})

const todo = mongoose.model('todo',ToDoSchema);
module.exports = {todo};