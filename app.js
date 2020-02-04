//"start": "nodemon --inspect app.js" debug
const express = require('express')
const app = express();
var path = require('path');
var mongoose = require('mongoose');
const adminRoutes = require('./app/admin/routes/admin');
const questionRoutes = require('./app/admin/routes/question');
const gameRoutes = require('./app/game/routes/game-routes');
var port = process.env.PORT || 3000;
const io = require('socket.io').listen(app.listen(port));

//app.set('views', './app/');
//app.set('views', path.join(__dirname, 'app'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('./views/'))
app.use(express.static('./public/'))
app.use(express.urlencoded({ extended: true }))
//
//connect mongoDB
//Import the mongoose module
//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/shinrojp';
mongoose.connect(mongoDB,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> console.log('Database Connection Successful!!'))
.catch(err => console.error(err));

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.set('socketio', io);
//router
app.use(adminRoutes);
app.use(questionRoutes);
app.use(gameRoutes);

//
require('./config/socketio')(app, io);
console.log('Your application is running on http://localhost:' + port);