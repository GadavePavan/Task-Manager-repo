const express = require("express");
const { createTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const app = express();


app.use(express.json());
app.use(cors({
origin: "http://localhost:5173"
})
);

app.post("/todo", async function(req,res){
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    
    if (!parsePayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputs",
        })
        return;
    }
    //put it in mongodb
    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
    })

    res.json({
        msg:"Todo created"
    })
})

app.get("/todos", async function(req,res){
     const todos = await todo.find({});

     res.json({
        todos
     })
})

app.put("/completed", async function(req,res){
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeparse(updatePayload);
    if (!parsePayload.success) {
        res.status(411).json({
        msg:"You sent the wrong inputs",
    })
    return;
}
await todo.update({
    _id: req.body.id
},{
    completed:true
})
res.json({
    msg:"Todo marked as completed"
})
})

app.listen(3000);