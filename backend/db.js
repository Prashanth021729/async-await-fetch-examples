const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://sriteja:sri1234@cluster0.bbqij.mongodb.net/todos");

const TodoSchema = {
    title:String,
    description:String, 
    completed:Boolean
}

const todo = mongoose.model('todos', TodoSchema)
module.exports = {
    todo
};