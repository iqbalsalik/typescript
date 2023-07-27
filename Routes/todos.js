"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let todos = [];
router.get("/", (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post("/todo", (req, res, next) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text
    };
    todos.push(newTodo);
    res.status(201).json({ message: "new todo added", todo: newTodo, todos: todos });
});
router.put("/todo/:todoId", (req, res, next) => {
    const tid = req.params.todoId;
    const todIndex = todos.findIndex(item => item.id === tid);
    if (todIndex >= 0) {
        todos[todIndex] = { id: todos[todIndex].id, text: req.body.text };
        return res.status(200).json({ message: "todo updated", todo: todos[todIndex], todos: todos });
    }
    res.status(404).json({ message: "todo not found!!" });
});
router.delete("/todo/:todoId", (req, res, next) => {
    const tid = req.params.todoId;
    todos.filter(item => item.id !== tid);
    res.status(200).json({ message: "Deleted todo", todos: todos });
});
exports.default = router;
