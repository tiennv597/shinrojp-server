var express = require('express');
var router = express.Router();
var gameController = require('../controllers/game-controller');
var roomController = require('../controllers/room-controller');
//get room index
router.get('/game/api/rooms', function (req, res) {
  res.render('game-room', { title: 'Express' });
  
});
// join room
router.get('/game/api/rooms/:room', (req, res) => {
  console.log(req.params.room);
  res.render('game-ingame', { roomName: req.params.room });
});
router.get('/game/api/rooms/test', (req, res) => {
  console.log(req.params.room);
  res.render('game-ingame', { roomName: req.params.room });
});
module.exports = router;