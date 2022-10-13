import { Router } from "express";
import CommentController from "../controller/comment.controller"
const commentRouter = Router()

const todoCtrl = new CommentController();

commentRouter.get('/',todoCtrl.get)
commentRouter.get('/',todoCtrl.getById)
commentRouter.post('/',todoCtrl.post)

export default commentRouter