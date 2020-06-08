
var SOCKET_CONSTANT = require("../constant/socket_constant.js");
module.exports = function (io, socket, namespace, listRoom) {

  var nsp = io.of(namespace);
  socket.on("get-rooms", function (data) {
    socket.emit('server-send-rooms', data);
  });

  socket.on(SOCKET_CONSTANT.creat_room, function (type, level, quantity) {
    console.log(type + level, quantity);
    // if (data == null) {
    //   socket.emit('server-send-rooms', listRoom);
    // }
    // else {
    //   console.log(data);
    //   socket.join(data);
    //   socket.gameRoom = data;
    //   listRoom.push(data);
    //   socket.emit("server-send-room-socket", data)
    //   console.log(socket.adapter.rooms);
    // }
  });
  socket.on("user-chat", function (data) {
    io.sockets.in(socket.gameRoom).emit("server-chat", data);
    console.log(data);
  });
  //test
  socket.on("msg", function (data) {
    console.log(data + "dd");
  });
}