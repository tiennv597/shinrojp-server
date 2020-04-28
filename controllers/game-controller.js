//create by tiennv597
module.exports = function (io, socket, listRoom) {

  var nsp = io.of('/game-namespace');

  socket.on('client-send-scores', (room, message) => {
    nsp.to(room).emit("server-send-scores", message);
    console.log(room + message);
  });

  socket.on('client-send-message', (room, displayName, message) => {
    nsp.to(room).emit("server-send-message", displayName, message);
    console.log(room + displayName + message);
  });

  socket.on("join-room", function (roomName, displayName) {
    socket.join(roomName);
    console.log(roomName);
    nsp.to(roomName).emit("joined-room", displayName);
    console.log(displayName);
  });

}