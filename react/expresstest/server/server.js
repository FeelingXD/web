const express = require('express')
const app = express()
const path = require('path')
const db = require('./db.js')

// mongoose.connect('mongodb://localhost:27017/party-recruit')
// const mongoose =require('mongoose')
// var db = mongoose.connection;
// db.on('error', console.error);
// db.once('open', function(){
//     console.log('connected!');
// });

app.listen(8080,function(){
    console.log('listening complete')
})

app.use(express.static(path.join(__dirname,'../build')))
// app.use((req,res) => {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000");
// })
// app.use((req, res) => {
//     res.header("Access-Control-Allow-Origin", "*"); // 모든 도메인 허용
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // 특정 도메인 허용
// });
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'../build/index.html'));
})