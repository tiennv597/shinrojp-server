
module.exports = function (app,io,socket,listRoom) {  
  socket.on('creat-room',function(data){
    if(data==null){
      socket.emit('server-send-rooms',listRoom);
    }
    else{
      socket.join(data);
      socket.gameRoom=data;
      listRoom.push(data);      
      socket.emit('server-send-rooms',listRoom);
      socket.emit("server-send-room-socket",data)
      console.log(socket.adapter.rooms);
    }
    });
  socket.on("user-chat",function(data){
    io.sockets.in(socket.gameRoom).emit("server-chat",data);
    console.log(data);
    });
}