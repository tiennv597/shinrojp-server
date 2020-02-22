var questionsModel = require("../models/questions")();



function addQuestions(){

	return {
		add: function(params, cb){

			var pto = {
				'viewOpts' : { title: 'Insert Questions', msgs: [] }
			}			

			questionsModel.addQuestions(params, function(err,udata){

				if(err){
					// var errorText="Your link is expired. Start the recovery process again.";
					// pto.viewOpts.msgs.push(msgs.error(errorText));
					console.log("Insert Unsuccesfuly");
				}else{
					console.log("Insert Successfuly");
				}
				cb(pto);
			});
		}
	}

}

module.exports = addQuestions;



// module.exports.insertQuestion = function (req, res, next) {    
//     questionsModel.addQuestions(req.body, function(err,udata){
// 	});

// };
