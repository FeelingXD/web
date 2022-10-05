const mongoose = require("mongoose");
const mongodb = "mongodb://localhost:27017/party-recruit";
mongoose.connect(mongodb,function(err){
    if(err){
        console.error('connectiong error' ,err);
    }
    console.log('connected!');
});
module.exports = () =>{
    function connect(){
        mongoose.connect(mongodb,function(err){
            if(err){
                console.error('connectiong error' ,err);
            }
            console.log('connected!');
        });
    }
    connect();
    mongoose.connection.on('disconnected',connect);
}