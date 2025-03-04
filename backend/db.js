const mongoose = require('mongoose');
mongoose.connect(" ");

const TodoSchema = {
    title:String,
    description:String, 
    completed:Boolean
}

const todo = mongoose.model('todos', TodoSchema)
module.exports = {
    todo
};
