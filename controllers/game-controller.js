/**
 * game controller 
 */
var SOCKET_CONSTANT = require("../constant/socket_constant.js");
var learnCtrl = require("../controllers/learn-controller")();
module.exports = function (io, socket, namespace) {

  var nsp = io.of(namespace);

  socket.on('client-send-scores', (room, message) => {
    nsp.to(room).emit("server-send-scores", message);
    console.log(room + message);
  });

  socket.on(SOCKET_CONSTANT.client_send_message, (room, displayName, message) => {
    var obj = { name: displayName, message: message };
    var message = JSON.stringify(obj);
    nsp.to(room).emit(SOCKET_CONSTANT.server_send_message, message);
    console.log(room + displayName + message);
  });

  socket.on(SOCKET_CONSTANT.join_room, function (roomName, displayName) {
    socket.join(roomName);
    console.log(roomName);
    nsp.to(roomName).emit("joined-room", displayName);
    console.log(displayName);
  });

  socket.on(SOCKET_CONSTANT.start_game, (room, level, type) => {
    var obj = { level: level, type: type };
    // var message = JSON.stringify(obj);

    learnCtrl.getRandomByLevelAndType(obj, function (pto) {
      nsp.to(room).emit(SOCKET_CONSTANT.start_game, pto);
    });

    console.log(room + level + type);
  });
  socket.on(SOCKET_CONSTANT.client_get_rooms, () => {
    //nsp.to(room).emit("server-send-scores", message);
    console.log(socket.adapter.rooms);
    //console.log(room + message);
  });

}