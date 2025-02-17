var mongojs = require('mongojs');
var path = require('path');

var env = process.env.NODE_ENV !== 'production';

if(env){
    //dev
	var db = mongojs('mongodb+srv://tiennv:tienNv97%40%40@cluster0-ypshb.mongodb.net/cluster0?retryWrites=true&w=majority', ['users','suscriptions']);
	db.users=db.collection('users');
	db.suscriptions=db.collection('suscriptions');

}else{
	//production
	var db = mongojs('mongodb+srv://tiennv:tienNv97%40%40@cluster0-ypshb.mongodb.net/cluster0?retryWrites=true&w=majority', ['users','suscriptions']);
	db.users=db.collection('users');
	db.suscriptions=db.collection('suscriptions');
}


module.exports = {
	db: db,
	env: env,
	sessionSecret: "changeme",
	projectName: "JaLoMe",
	emailData: {
		templatesPath: path.join(__dirname, 'views/emails'),
		from: "MVP <mvp@example.com>",
		replyTo: "MVP <mvp@example.com>",
		proyectName: "JaLoMe",
		contactEmail: "MVP <mvp@example.com>"
	},
	localLoginEnabled: true,
	registerEnabled: true,
	registerConfirmation: true,
	facebookLoginEnabled: true,//setting login fb on
	FACEBOOK_APP_ID : "534121453967696",
	FACEBOOK_APP_SECRET: "969b28e61a37bb8314804705635c8781",
	//FACEBOOK_CALLBACK_DOMAIN: "https://shinrojp-server.herokuapp.com/auth/facebook/callback"
	FACEBOOK_CALLBACK_DOMAIN: "https://localhost:3000//auth/facebook/callback"
};
