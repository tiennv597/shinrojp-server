var express = require('express');
const bodyParser = require('body-parser');
var router = express.Router();
var productController = require('../controllers/product-controller');
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
/* GET product page. */
router.get('/app-product', productController.getProductsPage);
/* GET product json api. */
router.get('/api/app-product', productController.getProductsApi);
/* POST product insert page. */
router.post('/add-product', urlencodedParser, productController.insertProduct);
/* POST product edit page. */
router.post('/edit-product', urlencodedParser, productController.editProduct);
/* POST product remove page. */
router.post('/remove-product', urlencodedParser, productController.removeProduct);
module.exports = router;