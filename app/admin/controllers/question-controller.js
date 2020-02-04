var Question = require('../models/question');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//get all product
module.exports.getQuestionPage = function (req, res, next) {
    // Question.find({}, function (err, products) {
        res.render('app-question', { title: 'Express'});
    // });
};
//get all product api
// module.exports.getProductsApi = function (req, res, next) {
//     Product.find({}, function (err, products) {
//         //res.render('app-product', { title: 'Express', products: products });
//         res.json(products)
//     });
// };
// insert product
module.exports.insertQuestion = function (req, res, next) {
    console.log(req.body.result);
    //Create an instance of model SomeModel
    // var awesome_instance =  new Question(
    //     { 
    //         type :req.body.type,
    //         level:req.body.level,  
    //         question: req.body.question,
    //         answers : [{answer: req.body.answerone,    result: true},
    //                    {answer: req.body.answertwo,    result: false},
    //                    {answer: req.body.answerthree,  result: false},
    //                    {answer: req.body.answerfour,   result: false}
    //                 ],
    //         comment : req.body.answercomment,
    //     }
    //   );
    // Save the new model instance, passing a callback
    // awesome_instance.collection=req.body.question;
    // awesome_instance.save(function (err, question) {
    //     if (err) return console.error(err);
    //     console.log(question.question + " saved to bookstore collection.");
    //   });
    //  console.log(awesome_instance);
};
// edit product
// module.exports.editProduct = function (req, res, next) {
//     Product.findByIdAndUpdate(req.body.productid, {name: req.body.productname, price: req.body.productprice, decription: req.body.productdescription },    
//         function(err) {
//             res.redirect('/app-product');
//         }
//         )
// };
// // remove product
// module.exports.removeProduct = function (req, res, next) {
//     Product.findByIdAndRemove(req.body.remproductid,    
//         function(err) {
//             res.redirect('/app-product');
//         }
//         )
// };