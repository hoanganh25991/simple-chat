//script src="/socket.io/socket.io.js" provide global io
//socket
/*global io*/
var socket = io();
//form
// var form = document.querySelector("form");
var form = $("form");
//function send_message
var send_message = function(){
    //msg from input
    var input = document.querySelector("input");
    var msg = input.val();
    //create li inside ul
    var ul = document.querySelector("ul");
    var li = document.createElement("li");
    //show msg on ul
    li.innerHTML(msg);
    ul.appendChild(li);
    //send msg to server
    socket.emit("chat_room", msg);
    //prevent form submit
    return false;
}
//add send_message on form
form.submit(send_message);