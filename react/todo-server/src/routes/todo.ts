import { Router } from "express";
import TodoController from '../controller/todo.controller'
const todoRouter = Router()
const todoCtrl = new TodoController()

todoRouter.get('/',todoCtrl.get)
todoRouter.get('/',todoCtrl.getById)
todoRouter.post('/',todoCtrl.post)

export default todoRouter