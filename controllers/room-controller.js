
var SOCKET_CONSTANT = require("../constant/socket_constant.js");
module.exports = function (io, socket, namespace, listRoom) {

  var nsp = io.of(namespace);
  socket.on("get-rooms", function (data) {
    socket.emit('server-send-rooms', data);
  });

  socket.on(SOCKET_CONSTANT.creat_room, function (level, type, quantity, time) {
    var d = new Date();
    var r = Math.floor((Math.random() * 10));
    var id_room = d.getMilliseconds().toString() + r.toString();
    // if (data == null) {
    //   socket.emit('server-send-rooms', listRoom);
    // }
    // else {
    //    console.log(data);
    //let obj_room = { id_room };
    socket.join(id_room);
    listRoom.set(id_room, '');
    var r = {
      'id_room': id_room,
      'owner': true,
    }
    var room = JSON.stringify(r);
    socket.emit(SOCKET_CONSTANT.server_send_room, room);
    console.log(listRoom.get(id_room));
    // }
  });
  socket.on(SOCKET_CONSTANT.join_room, function (id_room, password) {

    socket.join(id_room);
    var user = [];
    nsp.to(id_room).emit(SOCKET_CONSTANT.joined_room, user);

  });

  socket.on(SOCKET_CONSTANT.leave, (id_room) => {
    let obj_room = { id_room };

    socket.leave(id_room);
    listRoom.delete(obj_room);
    nsp.to(id_room).emit(SOCKET_CONSTANT.leave);
  });

  socket.on(SOCKET_CONSTANT.ready, (id_room, ready) => {
    nsp.to(id_room).emit(SOCKET_CONSTANT.ready, ready);
    console.log(ready);
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