
var SOCKET_CONSTANT = require("../constant/socket_constant.js");
var listRoom = [];
var listRoomCnWord = new Map();
var listRoomVocabulary = new Map();
var listRoomGrammar = new Map();
module.exports = function (app, io) {
    //deful name space
    io.on(SOCKET_CONSTANT.connect, function (socket) {
        // Load the chat controller
        console.log('ket noi toi ');

        socket.on(SOCKET_CONSTANT.client_get_rooms, function (data) {
            // switch (data) {
            //     case 'cw':
            //         let id_room_cw = Array.from(listRoomCnWord.keys());
            //         socket.emit(SOCKET_CONSTANT.server_send_rooms, id_room_cw);
            //         console.log(id_room_cw);
            //         break;
            //     case 'vc':
            //         // code block
            //         break;
            //     case 'gr':
            //         // code block
            //         break;
            //     default:
            //     // code block
            // }

            let id_room_cw = Array.from(listRoomCnWord.keys());
            let id_room_vc = Array.from(listRoomCnWord.keys());
            let id_room_gr = Array.from(listRoomCnWord.keys());
            // var rooms = {
            //     id_room_cw: id_room_cw,
            //     // id_room_vc: { id_room_vc },
            //     // id_room_gr: { id_room_gr }
            // }
            var r = {
                'id_room_cw': id_room_cw,
                'id_room_vc': id_room_vc,
                'id_room_gr': id_room_gr,

            }
            var rooms = JSON.stringify(r);

            socket.emit(SOCKET_CONSTANT.server_send_rooms, rooms);

            // console.log(rooms);
            // //console.log(listRoom);
        });
        //check info room
        // socket.on(SOCKET_CONSTANT.check_info_room, function (id_room, password) {
        //     let obj_room = { id_room };
        //     if (listRoom.get(obj_room) == '') {
        //         //socket.join(id_room);
        //         socket.emit(SOCKET_CONSTANT.result_check_room, true);

        //     } else {
        //         if (listRoom.get(obj_room) == password) {
        //             socket.join(id_room);
        //             socket.emit(SOCKET_CONSTANT.result_check_room, true);

        //         } else {
        //             socket.emit(SOCKET_CONSTANT.result_check_room, false);
        //         }

        //     }
        // });

    });

    //creat name space
    // var nsp = io.of('/game-namespace');
    // nsp.on(SOCKET_CONSTANT.connect, function (socket) {
    //     // Load the controller
    //     console.log('someone just connected !');
    //     require('../controllers/game-controller')(io, socket);
    //     require('../controllers/room-controller')(io, socket, listRoom);
    // });

    //creat china word namespace
    var china_word_ns = io.of(SOCKET_CONSTANT.china_word_ns);
    china_word_ns.on(SOCKET_CONSTANT.connect, function (socket) {
        console.log('china word namespace');
        require('../controllers/game-controller')(io, socket, SOCKET_CONSTANT.china_word_ns);
        require('../controllers/room-controller')(io, socket, SOCKET_CONSTANT.china_word_ns, listRoomCnWord);
    });

    //creat grammar namespace
    var grammar_ns = io.of(SOCKET_CONSTANT.grammar_ns);
    grammar_ns.on(SOCKET_CONSTANT.connect, function (socket) {
        console.log('grammar namespace');
        require('../controllers/game-controller')(io, socket);
        require('../controllers/room-controller')(io, socket, SOCKET_CONSTANT.grammar_ns, listRoomGrammar);
    });

    //creat vocabulary namespace
    var vocabulary_ns = io.of(SOCKET_CONSTANT.vocabulary_ns);
    vocabulary_ns.on(SOCKET_CONSTANT.connect, function (socket) {
        console.log('vocabulary namespace');
        require('../controllers/game-controller')(io, socket);
        require('../controllers/room-controller')(io, socket, SOCKET_CONSTANT.vocabulary_ns, listRoomVocabulary);
    });




}
