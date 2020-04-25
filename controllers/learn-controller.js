var questionModel = require("../models/questions")();
var grammarModel = require("../models/grammar")();

function Learn() {

	return {
		addQuestions: function (params, cb) {

			var pto = {
				'msgs': [],
				'action': 'OK'
			}

			questionModel.addQuestions(params, function (err, udata) {

				if (err) {
					// var errorText="Your link is expired. Start the recovery process again.";
					// pto.viewOpts.msgs.push(msgs.error(errorText));
					console.log("Insert Unsuccesfuly");
					pto.msgs.push(msgs.error("Insert Unsuccesfuly"));
				} else {
					console.log("Insert Successfuly");
				}
				cb(pto);
			});
		},
		// Grammar
		addGrammar: function (params, cb) {

			var pto = {
				'msgs': [],
				'action': 'OK'
			}

			grammarModel.addGrammar(params, function (err, udata) {

				if (err) {
					console.log("Insert Unsuccesfuly");
					pto.msgs.push(msgs.error("Insert Unsuccesfuly"));
				} else {
					console.log("Insert Successfuly");
				}
				cb(pto);
			});
		},
		//get all grammar
		getGrammar: function ({ }, cb) {

			grammarModel.getGrammar(function (err, udata) {

				if (err) {
					console.log("error get grammar");
				} else {

				}
				cb(udata);
			});
		},
		//get grammar by id
		getGrammarById: function (data) {

			var grammar = grammarModel.getGrammarById(data);

			return grammar;
		},
		//get grammar by content
		getGrammarByContent: function (data, cb) {

			grammarModel.getGrammarByContent(data, function (err, udata) {

				if (err) {
					console.log("error get grammar by content");
				} else {

				}
				cb(udata);
			});
		},
		//get grammar by mean
		getGrammarByMean: function (data, cb) {

			grammarModel.getGrammarByMean(data, function (err, udata) {

				if (err) {
					console.log("error get grammar by mean");
				} else {

				}
				cb(udata);
			});
		},
		//Example
		getExample: function (data) {

			var examples = grammarModel.getExample(data);
			return examples;

		},
		addExample: function (data, cb) {
			var pto = {
				'msgs': [],
				'action': 'OK'
			}

			grammarModel.addExample(data, function (err, udata) {

				if (err) {
					console.log("error get grammar");
				} else {

				}
				cb(pto);
			});
		}

	}

}

module.exports = Learn;


