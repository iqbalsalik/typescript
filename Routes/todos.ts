import { Router } from "express";

import { ToDo } from "../Models/todos"

const router = Router();

let todos: ToDo[] = []

router.get("/",(req,res,next)=>{
    res.status(200).json({todos:todos})
})

router.post("/todo",(req,res,next)=>{
   const newTodo: ToDo = {
    id: new Date().toISOString(),
    text: req.body.text
   }

   todos.push(newTodo);
   res.status(201).json({message:"new todo added",todo:newTodo,todos:todos})
})

router.put("/todo/:todoId",(req,res,next)=>{
    const tid = req.params.todoId;
    const todIndex = todos.findIndex(item => item.id === tid);
    if(todIndex>=0){
        todos[todIndex] = {id:todos[todIndex].id,text:req.body.text}
        return res.status(200).json({message:"todo updated",todo:todos[todIndex],todos:todos})
    }
    res.status(404).json({message:"todo not found!!"})
})

router.delete("/todo/:todoId",(req,res,next)=>{
    const tid = req.params.todoId;
    todos = todos.filter(item=> item.id !== tid)
    console.log(todos);
    res.status(200).json({message:"Deleted todo",todos:todos})
})


export default router;