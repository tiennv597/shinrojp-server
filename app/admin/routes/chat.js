var express = require('express');
var router = express.Router();
var chatController = require('../controllers/chat-controller');
/* GET chat page. */
router.get('/app-chat.html', chatController.getChatPage);
module.exports = router;