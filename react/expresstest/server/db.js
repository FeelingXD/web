const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/party-recruit');
// var db = mongoose.connection;
// db.on('error', function(err){
//     console.error('err', err);
// })
// db.once('open', function() {
//     console.log('Connected!');
// });
module.exports = () =>{
    function connect(){
        var db = mongoose.connection;
        mongoose.connect('mongodb://localhost:27017/party-recruit');
        db.on('error', console.error);
        db.once('open', function(){
            console.log('connected!');
        });
    }
    connect();
    mongoose.connection.on('disconnected',connect);
}