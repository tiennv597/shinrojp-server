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
		getGrammarById: function (data, cb) {

			grammarModel.getGrammarById(data, function (err, udata) {
				
				if (err) {
					console.log("error get grammar by id");
				} else {
					for (var i = 0; i < 1; i++) {
						//console.log(udata[i]); // result: "My","name"
						//if (udata[i] === 'name') {break;}
						cb(udata[i]);
					  }
					// udata.forEach(function(elem){
					// 	pto.level=elem.level;
					// 	pto.content=elem.content;
					// 	pto.mean=elem.mean;
					// 	pto.use=elem.use;
					// 	pto.note=elem.note;
					// 	break;
					// });
				
				}
				
			});
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


