
var SOCKET_CONSTANT = require("../constant/socket_constant.js");
var listRoom = [];
module.exports = function (app, io) {

    //creat name space
    var nsp = io.of('/game-namespace');
    // Add an event listener to the 'connection' event

    nsp.on('connection', function (socket) {
        // Load the chat controller
        console.log('someone just connected !');
        require('../controllers/game-controller')(io, socket);
        require('../controllers/room-controller')(app, io, socket, listRoom);
    });

    // io.sockets.on('get_room', function () {
    //     // Load the chat controller
    //     console.log('get room');
    //     // require('../controllers/game-controller')(io, socket);
    //     // require('../controllers/room-controller')(app, io, socket, listRoom);
    // });

    io.on('connection', function (socket) {
        // Load the chat controller
        console.log('context deflafasdfasf!');

        socket.on(SOCKET_CONSTANT.client_get_rooms, function (data) {

            socket.emit(SOCKET_CONSTANT.server_send_rooms, listRoom);
            console.log(listRoom);
        });

    });


}
