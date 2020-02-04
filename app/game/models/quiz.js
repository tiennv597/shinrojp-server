var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var AnswerSchema = new Schema({ contents: String,  result: Boolean });
var QuizSchema = new Schema(
  {
    _id: Schema.ObjectId,
    question: {type: String, required: true},
    answers : [AnswerSchema],
    comment : {type: String, required: true},
  }
);
// Virtual for book's URL
// BookSchema
// .virtual('url')
// .get(function () {
//   return '/catalog/book/' + this._id;
// });
//Export model
module.exports = mongoose.model('Quiz', QuizSchema);