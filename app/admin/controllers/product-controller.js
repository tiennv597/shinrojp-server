var Product = require('../models/Product')
//get all product
module.exports.getProductsPage = function (req, res, next) {
    Product.find({}, function (err, products) {
        res.render('app-product', { title: 'Express', products: products });
    });
};
//get all product api
module.exports.getProductsApi = function (req, res, next) {
    Product.find({}, function (err, products) {
        //res.render('app-product', { title: 'Express', products: products });
        res.json(products)
    });
};
// insert product
module.exports.insertProduct = function (req, res, next) {
    // Create an instance of model SomeModel
    var awesome_instance = new Product({ name: req.body.productname, price: req.body.productprice, decription: req.body.productdescription });
    // Save the new model instance, passing a callback
    awesome_instance.save(function (err) {
        if (err) return handleError(err);
        // saved!
        console.log('saved')
        res.redirect('/app-product');
    });
};
// edit product
module.exports.editProduct = function (req, res, next) {
    Product.findByIdAndUpdate(req.body.productid, {name: req.body.productname, price: req.body.productprice, decription: req.body.productdescription },    
        function(err) {
            res.redirect('/app-product');
        }
        )
};
// remove product
module.exports.removeProduct = function (req, res, next) {
    Product.findByIdAndRemove(req.body.remproductid,    
        function(err) {
            res.redirect('/app-product');
        }
        )
};