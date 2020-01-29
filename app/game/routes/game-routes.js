var express = require('express');
var router = express.Router();
var gameController = require('../controllers/game-controller');
var roomController = require('../controllers/room-controller');
// get game index
router.get('/game-index', (req, res) => {
    res.render('game-index', { title: 'Express' });
  });  
//get room index
router.get('/room', function (req, res) { 
  res.render('game-room', { title: 'Express' });
});
// join room
router.get('/room/:room', (req, res) => {
  res.render('game-ingame', { roomName: req.params.room });
});
module.exports = router;