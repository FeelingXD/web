import { Request,Response } from "express"
export default class BaseController{

    post = (req:Request,res:Response) =>{
        res.send('hello')
    }

    get = (req:Request,res:Response) =>{
        res.send('hello')
    }
}