var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductSchema = new Schema(
  {
    name: {type: String, required: true},
    price: {type: Number, required: true},
    decription: {type: String, required: true},
  }
);

// Virtual for book's URL
// BookSchema
// .virtual('url')
// .get(function () {
//   return '/catalog/book/' + this._id;
// });

//Export model
module.exports = mongoose.model('Product', ProductSchema);