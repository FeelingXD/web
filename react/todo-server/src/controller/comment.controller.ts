import BaseController from "./base.controller"
import Comment from "../models/comment.model"
export default class CommentController extends BaseController{
    
    constructor(){
        super(Comment)
    }

}