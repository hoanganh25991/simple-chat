var socket;
window.onload = function(){
	socket = io("/chat");
	$("form").submit(function(){
		//get text
		var input = $("#m");
        var text = input.val();
        input.val("");
        socket.emit("chat_room", text);
        return false;
	});
    socket.on("chat_room", function(msg){
        console.log(msg);
        $("#messages").append($("<li>").text(msg));
    });
};