//import express
var express = require("express");
//application-context
var app = express();
//http
var http = require("http");
//server
var server = http.Server(app);
//run server
server.listen(process.env.PORT, process.env.IP, ()=>{
    console.log("server: running");
});
//public folder
app.use(express.static("public"));
//handle application request/response
app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html");
});
//socketio
var socket_io = require('socket.io');
//io
var io = socket_io(server);
//io-connection, server-client
io.on("connection", (socket)=>{
    //listen on chat_room
    socket.on("chat_room", (msg)=>{
        //get msg, then emit to other users
        socket.broadcast.emit("chat_room", msg);
    });
});


