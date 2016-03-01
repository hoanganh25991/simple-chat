var express = require("express");
var app = express();

var http = require("http");
var server = http.Server(app);

app.use(express.static('public'));
server.listen(3000, function(){console.log("server is running");});

/**
 * socket-io
 */
var socketio = require("socket.io");
var io = socketio(server, {});

/**
 * handle request
 */
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

/**
 * handle io
 */
var count = 0;
//noinspection JSUnresolvedFunction
io.on("connection", function(socket){
    count++;
    console.log(count + " connected");
    socket.on("disconnect", function(){
        count--;
        console.log(count + " connected");
    });

    socket.on("chat_room", function(client_msg){
        console.log("msg: " + client_msg);
        //noinspection JSUnresolvedVariable
        socket.broadcast.emit("chat_room", client_msg);
    });
});
