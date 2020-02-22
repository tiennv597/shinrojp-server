//2020/02/22
var uuid = require('uuid');
function Questions(){

	var db=require("../config").db;	
	return {

		addQuestions : function (data, cb){

			var compatibleID=uuid.v4();	
			var questions={
					provider:data.userName,
					id:compatibleID,
					type : data.questionType,
  					level: data.questionLevel,
  					content: data.questionContent,
					answers : [
						{answer: req.body.answerone,    result: false},
						{answer: req.body.answertwo,    result: false},
						{answer: req.body.answerthree,  result: false},
						{answer: req.body.answerfour,   result: false}
					 ],
  					comment: data.Comment
			};
			switch (req.body.result){
				case '1' : {
					questions.answers[0].result=true;
					  break;
				  }
				case '2' : {  
					questions.answers[1].result=true;
					  break;
				  }
				case '3' : {
					questions.answers[2].result=true;
					break;
				}
				case '4': {
					questions.answers[3].result=true;
					break;
				}
				  default : {
					
				  }
			  }
			
			db.questions.insert(questions,function(e, d){
							cb(e,d);
						});
		}
	}
}

module.exports=Questions;