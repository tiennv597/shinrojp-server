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
	FACEBOOK_APP_ID : "708127079995173",
	FACEBOOK_APP_SECRET: "26823b83f190b9a18b6a19c88b9f249d",
	FACEBOOK_CALLBACK_DOMAIN: "https://shinrojp-server.herokuapp.com/auth/facebook/callback/"
};
