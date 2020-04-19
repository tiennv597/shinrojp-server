// creat 2020/04/18

var uuid = require('uuid');
function Grammar(){

	var db=require("../config").db;	

	return {

//add grammar to db
		addGrammar : function (data, cb){
			//var compatibleID=uuid.v4();	
			var grammar={
					provider:data.provider,
					//id:compatibleID,
  					level: data.level,
					content: data.content,
					mean:data.mean,
					use:data.use,
					note:data.note,
					example : [
						{
							sentence: data.sentence, // sentence of  Japanese
							vi: data.vi,             // Vietnamese
							furigana:data.furigana 　// furigana of Japanese
						}
					 ],
			};
			//insert to colection grammars
			db.grammars.insert(grammar,function(e, d){
							cb(e,d);
						});
		},
//get grammar
		getGrammar : function (cb){
			//get all grammars
			db.grammars.find({},function(e, d){
							cb(e,d);
						});
		},

	}
}

module.exports=Grammar;