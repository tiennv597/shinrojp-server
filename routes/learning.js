// create by tiennv597-2020/04/22

// 301 redirect: Moved Permanently (often best for SEO)
// 302 redirect: Found / Moved temporarily.
// 303 redirect: See Other.
// 307 redirect: Temporarily Redirect.
// 308 redirect: Permanent Redirect.

var express = require('express');
var router = express.Router();
var learnCtrl = require("../controllers/learn-controller")();
var JapaneseRegex = require("../common/JapaneseRegex")();


router.get('/learning/learning', function (req, res, next) {

	res.render('learning/settings.ejs', { title: "Learn" });

});
// page questions
router.get('/learning/questions', function (req, res, next) {

	res.render('learning/questions.ejs', { title: "Add Questions" });

});
router.post('/questions/add', function (req, res, next) {
	learnCtrl.addQuestions(req.body, function (pto) {
		res.send(pto);
	});
});
router.get('/learning/questions/api', function (req, res, next) {

	res.render('learning/questions.ejs', { title: "Add Questions" });

});

// page grammar
router.get('/learning/grammar', function (req, res, next) {
	learnCtrl.getGrammar(req.body, function (grammars) {
		res.render('learning/grammar.ejs', { title: "Grammar", grammars: grammars });
		
	});
});
router.post('/grammars/add', function (req, res, next) {
	learnCtrl.addGrammar(req.body, function (pto) {
		res.redirect('/learning/grammar');
	});
});
router.get('/learning/grammar/api', function (req, res, next) {
	learnCtrl.getGrammar(req.body, function (grammars) {
		res.send(grammars);
	});
});
//page detail

router.post('/learning/grammar/detail', function (req, res, next) {
	learnCtrl.getGrammarById(req.body.grammar_id, function (grammar) {
	res.render('learning/grammar-detail.ejs', { title: "Detail", grammar: grammar});
	});
	
});
//add example
router.post('/learning/grammar/example/add', function (req, res, next) {
	learnCtrl.addExample(req.body, function (pto) {
		res.redirect(307, '/learning/grammar/detail');
	});

});
//search grammar
router.post('/learning/grammar/search', function (req, res, next) {

	var detection = JapaneseRegex.detection(req.body.key_search);

	if (detection) { //Japanese characters found
		console.log("true");
		learnCtrl.getGrammarByContent(req.body.key_search, function (grammar) {
			grammar.forEach(element => {
				console.log(element.content);
			});
		});
	}
	else { //No Japanese characters
		console.log("false");
		learnCtrl.getGrammarByMean(req.body.key_search, function (grammar) {
			grammar.forEach(element => {
				console.log(element.content);
			});
		});
	}

});



module.exports = router;