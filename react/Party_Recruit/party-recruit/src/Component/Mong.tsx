import { Schema,model,connect } from "mongoose";

interface User{
    id: string;
    name: string;
    pw: string;
}

const userSchema = new Schema<User>({
    id: {type:String, required: true},
    name : {type:String, required: true},
    pw: String
});
