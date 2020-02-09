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