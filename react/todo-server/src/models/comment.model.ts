import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const Comment = mongoose.model('commnets',CommentSchema)

export default Comment