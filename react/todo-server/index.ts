import mongoose from './src/db';
import app from './src/app';
const PORT =8080;


app.listen(PORT,() =>{
    console.log(`Listening on http://localhost:${PORT}`);
    mongoose.connect('mongodb://localhost:27017/todoapp', () => {
        console.log("connected")
    })
})