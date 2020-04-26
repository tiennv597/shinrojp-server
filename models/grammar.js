// creat by tiennv597 2020/04/18

var uuid = require('uuid');
function Grammar() {

	var db = require("../config").db;

	return {

		addGrammar: function (data, cb) { //add grammar to db
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
			db.grammars.insert(grammar, function (e, d) { //insert to colection grammars
				cb(e, d);
			});
		},
		editGrammar: function (data, cb) { //edit grammar to db

			db.grammars.update({ grammar_id: data.grammar_id },
				{
					$set: {
						level: data.level,
						content: data.content,
						mean: data.mean,
						use: data.use,
						note: data.note,
					}
				},
				function (e, d) {
					cb(e, d);
				});
		},
		deleteGrammar: function (data, cb) { //delete grammar

			db.grammars.remove({ grammar_id: data.grammar_id },
				function (e, d) {

				});
			db.examples.remove({ grammar_id: data.grammar_id },
				function (e, d) {

				});

			cb(e, d);
		},

		getGrammar: function (cb) {   	//get all grammars

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

		getGrammarById: function (data, cb) { //get  grammars by id

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
						grammar_id: 1,
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
				// 	$unwind: "$list_example"  // 
				// }

			], function (e, d) {
				cb(e, d);
			});
		},

		getGrammarByJapanese: function (data, cb) { //get grammar by Japanese

			db.grammars.aggregate([
				{
					$match: { 'content': { '$regex': data, '$options': 'i' } }
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
						grammar_id: 1,
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
				// 	$unwind: "$list_example"  // 
				// }

			], function (e, d) {
				cb(e, d);
			});
		},

		getGrammarByNoJapanese: function (data, cb) {  //get grammar by No Japanese 

			db.grammars.aggregate([
				{
					$match: { 'mean': { '$regex': data, '$options': 'i' } }
				},
				{
					$lookup: {
						from: "examples",
						localField: "grammar_id",    // field in the grammar collection
						foreignField: "grammar_id",  // field in the example collection
						as: "list_example"
					}
				},
				{
					$project: {
						grammar_id: 1,
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
				// 	$unwind: "$list_example"  // 
				// }

			], function (e, d) {
				cb(e, d);
			});
		},

		addExample: function (data, cb) {  	////add example to db
			var compatibleID = uuid.v4();
			var example = {
				example_id: compatibleID,
				grammar_id: data.grammar_id,
				sentence: data.sentence,    // sentence of  Japanese
				vi: data.vi,                // Vietnamese
				furigana: data.furigana 　  // furigana of Japanese
			};

			db.examples.insert(example, function (e, d) { //insert to colection examples
				cb(e, d);
			});
		},

		getExample: function (data) { //get example with grammar_id

			var examples = db.examples.find({ grammar_id: data });
			return examples;

		},
		getExampleByJapanese: function (data, cb) { //get example by Japanese

			db.examples.aggregate([
				{
					$match: { 'sentence': { '$regex': data, '$options': 'i' } }
				},
				{
					$lookup: {
						from: "grammars",
						localField: "grammar_id",    // field in the orders collection
						foreignField: "grammar_id",  // field in the items collection
						as: "grammar"
					}
				},
				{
					$project: {
						example_id: 1,
						sentence: 1,
						furigana: 1,
						vi: 1,
						grammar: {
							grammar_id: 1,
							level: 1,
							content: 1,
							mean: 1,
							use: 1,
							note: 1
						},
					}
				},
			], function (e, d) {
				cb(e, d);
			});
		},
		getExampleByNoJapanese: function (data, cb) { //get example by No Japanese

			db.examples.aggregate([
				{
					$match: { 'vi': { '$regex': data, '$options': 'i' } }
				},
				{
					$lookup: {
						from: "grammars",
						localField: "grammar_id",    // field in the orders collection
						foreignField: "grammar_id",  // field in the items collection
						as: "grammar"
					}
				},
				{
					$project: {
						example_id: 1,
						sentence: 1,
						furigana: 1,
						vi: 1,
						grammar: {
							grammar_id: 1,
							level: 1,
							content: 1,
							mean: 1,
							use: 1,
							note: 1
						},
					}
				},
			], function (e, d) {
				cb(e, d);
			});
		},

	}
}

module.exports = Grammar;