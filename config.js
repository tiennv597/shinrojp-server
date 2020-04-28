var mongojs = require('mongojs');
var path = require('path');

var env = process.env.NODE_ENV !== 'production';

if(env){
    //dev
	var db = mongojs('mongodb://127.0.0.1/shinrojp', ['users','suscriptions']);
	db.users=db.collection('users');
	db.suscriptions=db.collection('suscriptions');

}else{
	//production
	var db = mongojs('mongodb://127.0.0.1/shinrojp', ['users','suscriptions']);
	db.users=db.collection('users');
	db.suscriptions=db.collection('suscriptions');
}


module.exports = {
	db: db,
	env: env,
	sessionSecret: "changeme",
	projectName: "MVP",
	emailData: {
		templatesPath: path.join(__dirname, 'views/emails'),
		from: "MVP <mvp@example.com>",
		replyTo: "MVP <mvp@example.com>",
		proyectName: "MVP",
		contactEmail: "MVP <mvp@example.com>"
	},
	localLoginEnabled: true,
	registerEnabled: true,
	registerConfirmation: true,
	facebookLoginEnabled: true,//setting login fb on
	FACEBOOK_APP_ID : "200866470992544",
	FACEBOOK_APP_SECRET: "3895b774eb8d19f85fd07db11e8de8b9",
	FACEBOOK_CALLBACK_DOMAIN: "http://localhost:3000/auth/facebook/callback"
};
