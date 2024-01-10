const express = require('express')

const jwt = require('jsonwebtoken')
const {todo}  = require('./TaskSchema')
const cors = require('cors')
const port = 4004
const app = express()


const { createToDo,updateToDo} = require('./types')

app.use(cors());
app.use(express.json())

app.post('/todo',async function(req,res){
    const task = req.body;
    const goodtask = createToDo.safeParse(task);
    if(!goodtask.success){
        res.send(411).json({msg: "wrong types to create"})
    }
    
    await todo.create({
        title: task.title,
        description: task.description,
        completed: false
    })
    res.send({msg:"task added"})

})
app.get('/todolist',async function(req,res){
    const todolist = await todo.find({})
    res.json(todolist)
})
app.put('/completed',async function(req,res){
    const task = req.body;
    const goodtask = updateToDo.safeParse(task);
    if(!goodtask.success){
        res.send(411).json({msg: "wrong types to update"})
    }

    //id aa em untadhi id manam store cheskotle so finding ela 
    await todo.updateOne({
        _id: req.body.id
    },{completed:true})
    res.send({msg: 'the task is completed '})
    
    
})
app.listen(port,function(req,res){
    console.log({msg: `listening on ${port}`})
})
