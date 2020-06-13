
var SOCKET_CONSTANT = require("../constant/socket_constant.js");
module.exports = function (io, socket, namespace, listRoom) {

  var nsp = io.of(namespace);
  socket.on("get-rooms", function (data) {
    socket.emit('server-send-rooms', data);
  });

  socket.on(SOCKET_CONSTANT.creat_room, function () {
    var d = new Date();
    var r = Math.floor((Math.random() * 10));
    var id_room = d.getMilliseconds().toString() + r.toString();
    // if (data == null) {
    //   socket.emit('server-send-rooms', listRoom);
    // }
    // else {
    //    console.log(data);
    let obj_room = { id_room };
    socket.join(id_room);
    //socket.gameRoom = data;
    listRoom.set(obj_room, "result");
    socket.emit(SOCKET_CONSTANT.server_send_room, id_room.toString());
    console.log(listRoom.get(obj_room));
    // }
  });
  socket.on(SOCKET_CONSTANT.leave, (id_room) => {
    let obj_room = { id_room };
    //nsp.to(room).emit("server-send-scores", message);
    socket.leave(id_room);
    listRoom.delete(obj_room);
    console.log(listRoom.has(obj_room));
    //console.log(room + message);
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