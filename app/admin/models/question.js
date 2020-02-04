// var mongoose = require('mongoose');

// var Schema = mongoose.Schema;
// var AnswerSchema = new Schema({ contents: String,  result: Boolean });
// var QuestionSchema = new Schema(
//   {
//     _id: Schema.ObjectId,
//     question: {type: String, required: true},
//     answers : [AnswerSchema],
//     comment : {type: String, required: true},
//   }
// );
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
  type : String,
  level: String,
  question: String,
  answers: [{answer: String,  result: Boolean }],
  comment: String
});
//Export model
module.exports = mongoose.model('Question', QuestionSchema,'questions');