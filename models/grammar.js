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
		//get all grammars
		getGrammar: function (cb) {

			db.grammars.aggregate([{
				$lookup: {
					from: "examples",
					localField: "grammar_id",    // field in the orders collection
					foreignField: "grammar_id",  // field in the items collection
					as: "list_grammar"
				},
			},
			{ $sample: { size: 8 } }
			], function (e, d) {
				cb(e, d);
			});
		},
		//get  grammars by id
		getGrammarById: function (data, cb) {

			db.grammars.aggregate([
				{
					$match: { 'grammar_id': { '$regex': data, '$options': 'i' } }
				},
				{
					$lookup: {
						from: "examples",
						localField: "grammar_id",    // field in the orders collection
						foreignField: "grammar_id",  // field in the items collection
						as: "list_example"
					}
				},
				{
					$project: {
						level: 1,
						content: 1,
						mean: 1,
						use: 1,
						note: 1,
						list_example: {
							sentence: 1,
							vi: 1,
							furigana: 1
						},
					}
				},
				// {
				// 	$unwind: "$list_example"
				// }

			], function (e, d) {
				cb(e, d);
			});
		},
		//get grammar by content
		getGrammarByContent: function (data, cb) {

			db.grammars.aggregate([{
				$lookup: {
					from: "examples",
					localField: "grammar_id",    // field in the orders collection
					foreignField: "grammar_id",  // field in the items collection
					as: "list_grammar"
				},
			},
			{ $match: { 'content': { '$regex': data, '$options': 'i' } } }

			], function (e, d) {
				cb(e, d);
			});
		},
		//get grammar by mean
		getGrammarByMean: function (data, cb) {

			db.grammars.aggregate([{
				$lookup: {
					from: "examples",
					localField: "grammar_id",    // field in the orders collection
					foreignField: "grammar_id",  // field in the items collection
					as: "list_grammar"
				},
			},
			{ $match: { 'mean': { '$regex': data, '$options': 'i' } } }

			], function (e, d) {
				cb(e, d);
			});
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
			var examples = db.examples.find({ grammar_id: data });
			return examples;

		}

	}
}

module.exports = Grammar;