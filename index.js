//import modules

var express=require("express");
var socket=require('socket.io');

var app=express();

//Set up server
var server=app.listen(2000,function(){
    console.log("Listening for requests in port 2000");
});

//static file set up
app.use(express.static("public"));

//socket set up
var io=socket(server);
io.on('connection',function(socket){
    console.log('Made the connection to the socket',socket.id);
    socket.on('chat',function(data){
        io.sockets.emit('chat',data);
    });

    socket.on('typing',function(data){
        socket.broadcast.emit('typing',data);
    });

});

