var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

// load up the user model
var User = require("../models/users.js")();

module.exports = function (passport) {
    var opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
    opts.secretOrKey = 'wowwow';
    passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
        User.findById(jwt_payload.id, function (err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                console.log(user);
                done(null, user);
            } else {
                done(null, false);
            }
        });
    }));
};