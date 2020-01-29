module.exports = function (io,socket,listRoom) {
  var nsp = io.of('/game-namespace'); 
  socket.on('client-send-scores', (room, message) => {
    nsp.to(room).emit("server-send-scores", message);
    console.log(room+message);    
  });
  socket.on("join-room",function(data){
     socket.join(data);
     console.log(data);
     nsp.to(data).emit("joined-room","add 1");
     console.log(socket.adapter.rooms);      
  });
}