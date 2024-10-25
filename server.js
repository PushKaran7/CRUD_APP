// const http = require("http");

// var port=3000;

// const server=http.createServer((req,res)=>{
//     res.end("hello");
// });

// server.listen(3000,()=>{
//     console.log("server is running on ",port);
// })


const express=require("express");
const errorHandler = require("./middleware/errorhandler");
const connectionDB = require("./config/dbConnection");
const app=express();

const dotenv=require("dotenv").config();

const port=process.env.PORT || 5000;

connectionDB();
app.use(express.json());

app.use('/api/items',require("./routes/itemRoutes"))

app.use(errorHandler);

app.listen(port,()=>{
    console.log("server running on",port);
})

