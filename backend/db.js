const mongoose = require("mongoose");
const { boolean } = require("zod");
 
mongoose.connect("mongodb+srv://Pavan123:ZFFO66e112sie4kD@cluster0.dnscn0k.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String,
    description :String,
    completed: {
        type:Boolean,
        default:false
    }
})

const todo = mongoose.model('todos',todoSchema);

module.exports={
    todo
}