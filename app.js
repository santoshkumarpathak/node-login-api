// const helper = require("./helper");
// const http = require("http");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require('mongoose');
// const fs = require("fs");
// const filename = "filename.txt"; 

// imprt router 
const authrouter = require('./routers/auth')
const postroute = require('./routers/post')
//environment
dotenv.config();

// db connected
mongoose.connect( process.env.DB_CONNECT ,
{useNewUrlParser: true, useUnifiedTopology: true},
 () => {    
    console.log('db connected');
} )

app.use(express.json())

app.use('/api/user',authrouter);
app.use('/api/post',postroute);


app.listen(3000, () => console.log('3000 port server running'));
// const Total = helper.sum(10,10);
// console.log(Total); 

// fs.watch(filename, () => console.log("file saved"))

// fs.readFile(filename, (err, data) =>{
//     if(err){
//         console.log("error is here");
//     }
//     console.log(data.toString());
// });
 
// console.log("Nodejs async function");

// const subs = helper.sub(10,5);
// console.log(subs); 
// const server = http.createServer((req, res) => {
//   res.end(" Create the your Server1 ");
// });
// server.listen(3000);

// app.get("/", (req, res) =>  {
//     res.send("hey whats up from express");
// });
// app.listen(3001);

// const mult = helper.mul(10,1);
// console.log(mult);