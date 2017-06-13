//make the connection
var socket=io.connect('http://localhost:2000');

var message=document.getElementById('message');
    handler=document.getElementById('handler'),
    btnsend=document.getElementById('send'),
    output=document.getElementById('output'),
    feedback=document.getElementById('feedback');

//sending typing... data message
message.addEventListener('keypress',function(){
    socket.emit('typing',handler.value);
})


//sending data to the server side 
btnsend.addEventListener('click',function(){
    socket.emit('chat',{
        message:message.value,
        handler:handler.value
    });
});

socket.on('chat',function(data){
    feedback.innerHTML='';
output.innerHTML+= '<p><strong>'+data.handler+':</strong>'+data.message+'</p>';
})

socket.on('typing',function(data){
    feedback.innerHTML='<p><em>'+ data + ' typing... a  message </em></p>';
});

