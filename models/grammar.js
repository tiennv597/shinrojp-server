// creat 2020/04/18

var uuid = require('uuid');
function Grammar() {

	var db = require("../config").db;

	return {

		//add grammar to db
		addGrammar: function (data, cb) {
			var compatibleID = uuid.v4();
			var grammar = {
				provider: data.provider,
				grammar_id: compatibleID,
				level: data.level,
				content: data.content,
				mean: data.mean,
				use: data.use,
				note: data.note,
			};
			//insert to colection grammars
			db.grammars.insert(grammar, function (e, d) {
				cb(e, d);
			});
		},
		//get grammar
		getGrammar: function (cb) {
			//get all grammars
			db.grammars.find({}, function (e, d) {
				cb(e, d);
			});
		},
		getGrammarById: function (data) {
			//get  grammars by id
			 var grammar =db.grammars.find({grammar_id: data});
			 return grammar;
		},
		////add example to db
		addExample: function (data, cb) {
			var compatibleID = uuid.v4();
			var example = {
				example_id: compatibleID,
				grammar_id: data.grammar_id,
				sentence: data.sentence,    // sentence of  Japanese
				vi: data.vi,                // Vietnamese
				furigana: data.furigana 　  // furigana of Japanese
				,
			};			
			//insert to colection examples
			db.examples.insert(example, function (e, d) {
				cb(e, d);
			});
		},
		//get example with grammar_id
		getExample: function (data) {
			//get all grammars
			var examples=db.examples.find({grammar_id : data});
			return examples;

		}

	}
}

module.exports = Grammar;