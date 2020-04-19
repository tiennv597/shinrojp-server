var questionModel = require("../models/questions")();
var grammarModel = require("../models/grammar")();

function Learn(){

	return {		
		addQuestions: function(params, cb){

			var pto = {
				'msgs' :[],
				'action' : 'OK'
			}		

			questionModel.addQuestions(params, function(err,udata){

				if(err){
					// var errorText="Your link is expired. Start the recovery process again.";
					// pto.viewOpts.msgs.push(msgs.error(errorText));
					console.log("Insert Unsuccesfuly");
					pto.msgs.push(msgs.error("Insert Unsuccesfuly"));
				}else{
					console.log("Insert Successfuly");					
				}
				cb(pto);
			});
		},
// Grammar
		addGrammar: function(params, cb){

			var pto = {
				'msgs' :[],
				'action' : 'OK'
			}		

			grammarModel.addGrammar(params, function(err,udata){

				if(err){
					console.log("Insert Unsuccesfuly");
					pto.msgs.push(msgs.error("Insert Unsuccesfuly"));
				}else{
					console.log("Insert Successfuly");					
				}
				cb(pto);
			});
		},
		getGrammar: function({},cb){		

			grammarModel.getGrammar(function(err,udata){

				if(err){
					console.log("error get grammar");					
				}else{
					console.log(udata);					
				}
				cb(udata);
			});
		}

	}

}

module.exports = Learn;



// module.exports.insertQuestion = function (req, res, next) {    
//     questionsModel.addQuestions(req.body, function(err,udata){
// 	});

// };
