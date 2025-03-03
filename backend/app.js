const express = require('express');
const app = express();
const port = 3001;
const {createTodo, upadteTodo } = require('../backend/types');
const {todo} = require('../backend/db')
const cors = require('cors');
app.use(express.json());
app.use(cors())
app.post("/todo",async (req,res) =>{
    const payLoad = req.body;
    const parsedPayload = createTodo.safeParse(payLoad);

    if(!parsedPayload.success){
        res.status(411).json({
            msg: "Invalid data enterted"
        })
        return
    }

    await todo.create({
        title: payLoad.title,
        description: payLoad.description,
        completed: false
    })
    res.status(200).json({
        msg: "created a todo sucessfully"
    })
     
});

app.get("/todos" ,async(req,res) =>{
    const todos = await todo.find({});
    if(todos){
    res.status(200).json({
        todos: todos
    })}
    else 
    {
        res.json({
            msg: "No todos yet..."
        })
    }
});

app.put("/completed",async(req,res)=>{
    const data = req.body;
    const parsedData = upadteTodo.safeParse(data);
    if(!parsedData.success){
        res.status(411).json({
            msg: "wrong inputs"
        }) 
       return
    }
    await todo.update({
        _id:req.body.id
    },
    {
        completed: true
    })
    res.status(200).json({
        msg: "updated successfully"
    })

});

app.delete("todo/:todoId", (req,res)=>{

});

app.listen(port);