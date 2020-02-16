//"start": "nodemon --inspect app.js" debug
const express = require('express');
const app = express();
var path = require('path');
var mongoose = require('mongoose');
const passport = require('passport');
const authRoutes = require('./routes/routes');
const FacebookStrategy  = require('passport-facebook').Strategy;
const session  = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const config = require('./config/fbconfig');
const adminRoutes = require('./app/admin/routes/admin');
const questionRoutes = require('./app/admin/routes/question');
const gameRoutes = require('./app/game/routes/game-routes');
//user
var User = require('./model/user');
var port = process.env.PORT || 3000;
const io = require('socket.io').listen(app.listen(port));

// Passport session setup. 
passport.serializeUser(function(user, done) {
    done(null, user);
  });
passport.deserializeUser(function(obj, done) {
    done(null, obj);
  });
  // Using FacebookStrategy with Passport.
passport.use(new FacebookStrategy({
    clientID: config.facebook_api_key,
    clientSecret:config.facebook_api_secret ,
    callbackURL: config.callback_url,
    profileFields:["email","gender","locale","displayName"]
  },
  function(accessToken, refreshToken, profile, done) {
    process.nextTick(function () {
      console.log(accessToken, refreshToken, profile, done);
      User.findOne({id:profile._json.id},function(err,user){
        if(err) return done(err);
        if(user) return done(user);
        const newUser=new User({
          id:profile._json.id,
          name:profile._json.name,
          email:profile._json.email
        }
        );
        newUser.save((err)=>{
          return done(null,newUser);
        });
      });
      return done(null, profile);
    });
  }
));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); //Using view ejs
app.use(cookieParser()); //Parse cookie
app.use(bodyParser.urlencoded({ extended: false })); //Parse body to get data
app.use(session({ secret: 'keyboard cat', key: 'sid'}));  //Save user login
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('./views/'));
app.use(express.static('./public/'));
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
app.use(authRoutes);

//
require('./config/socketio')(app, io);
console.log('Your application is running on http://localhost:' + port);