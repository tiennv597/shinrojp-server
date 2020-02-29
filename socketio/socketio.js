// var roomCollection =  new function() {
//     this.totalgameCount = 0,
//     this.gameRoom = {}
//   };
var listRoom=[];
module.exports = function (app, io) {
    //creat name space
var nsp = io.of('/game-namespace'); 
    	// Add an event listener to the 'connection' event
        nsp.on('connection', function(socket) {
            // Load the chat controller
            console.log('someone just connected !');
            require('../controllers/game-controller')(io,socket);
            require('../controllers/room-controller')(app,io,socket,listRoom);
        });
    }