//2020/02/22
var uuid = require('uuid');
function Questions(){

	var db=require("../config").db;	
	return {
//add question to db
		addQuestions : function (data, cb){
			var compatibleID=uuid.v4();	
			var questions={
					provider:data.provider,
					id:compatibleID,
					type : data.type,
  					level: data.level,
  					content: data.content,
					answers : [
						{answer: data.answerone,    result: false},
						{answer: data.answertwo,    result: false},
						{answer: data.answerthree,  result: false},
						{answer: data.answerfour,   result: false}
					 ],
  					comment: data.comment
			};
			switch (data.result){
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
		},

// // get questions
// 		getQuestions : function (data, cb){
// 			var compatibleID=uuid.v4();	
// 			var questions={
// 					provider:data.provider,
// 					id:compatibleID,
// 					type : data.type,
//   					level: data.level,
//   					content: data.content,
// 					answers : [
// 						{answer: data.answerone,    result: false},
// 						{answer: data.answertwo,    result: false},
// 						{answer: data.answerthree,  result: false},
// 						{answer: data.answerfour,   result: false}
// 					 ],
//   					comment: data.comment
// 			};
// 			switch (data.result){
// 				case '1' : {
// 					questions.answers[0].result=true;
// 					  break;
// 				  }
// 				case '2' : {  
// 					questions.answers[1].result=true;
// 					  break;
// 				  }
// 				case '3' : {
// 					questions.answers[2].result=true;
// 					break;
// 				}
// 				case '4': {
// 					questions.answers[3].result=true;
// 					break;
// 				}
// 				  default : {
					
// 				  }
// 			  }
			
// 			db.questions.insert(questions,function(e, d){
// 							cb(e,d);
// 						});
// 		}
	}
}

module.exports=Questions;