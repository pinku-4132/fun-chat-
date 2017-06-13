//make the connection
var socket=io.connect('http://localhost:2000');

var message=document.getElementById('message');
    handler=document.getElementById('handler'),
    btnsend=document.getElementById('send'),
    output=document.getElementById('output');
//sending data to the server side 
btnsend.addEventListener('click',function(){
    socket.emit('chat',{
        message:message.value,
        handler:handler.value
    });
});

socket.on('chat',function(data){
output.innerHTML+= '<p><strong>'+data.handler+':</strong>'+data.message+'</p>';
})

