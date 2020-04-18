var express = require('express');
var router = express.Router();
var learnCtrl = require("../controllers/learn-controller")();


router.get('/learning/learning', function(req, res, next) {

	res.render('learning/settings.ejs', {title:"Learn"});
		
});
// page questions
router.get('/learning/questions', function(req, res, next) {

	res.render('learning/questions.ejs', {title:"Add Questions"});
		
});
router.post('/questions/add', function(req, res, next) {
		learnCtrl.addQuestions(req.body, function(pto){
			res.send(pto);
		});
});
router.get('/learning/questions/api', function(req, res, next) {

	res.render('learning/questions.ejs', {title:"Add Questions"});
		
});

// page grammar
router.get('/learning/grammar', function(req, res, next) {

	res.render('learning/grammar.ejs', {title:"Grammar"});
		
});
router.post('/grammars/add', function(req, res, next) {
	learnCtrl.addGrammar(req.body, function(pto){
		res.send(pto);
	});
});
                                     									
module.exports = router;