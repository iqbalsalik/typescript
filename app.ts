import express from "express";
import bodyParser from "body-parser";

import todosRouter from "./Routes/todos"

const app = express();

app.use(bodyParser.json())

app.use(todosRouter);

app.listen(3000)