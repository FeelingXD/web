import { Request,Response } from "express"
import mongoose from "../db"
export default class BaseController{
    
    model: mongoose.Model<any,any>
    modelName: string

    constructor(model: mongoose.Model<any,any>){
        this.model = model
        this.modelName = model.modelName
    }

    post = async (req:Request,res:Response) =>{
        try{
            const data = req.body
            const dbData = await this.model.create(data)
            res.send(dbData)
        }catch(error){
            res.status(400).send(`error in this post ${this.modelName}`)
        }
        
    }

    get = async (req:Request,res:Response) =>{
        try{
            const data = req.body
            const dbData = await this.model.find()
            res.send(dbData)
        }catch(error){
            res.status(400).send(`error in this get ${this.modelName}`)
        }
       
    }

    getById = async (req:Request, res:Response ) =>{
        try{
            const { id }  =req.params
            const dbData = await this.model.find({_id: id})
            res.send(dbData)
        }catch(error){
            res.status(400).send(`error in this get ${this.modelName}`)
        }
    }
}