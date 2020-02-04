var express = require('express');
const bodyParser = require('body-parser');
var router = express.Router();
var questionController = require('../controllers/question-controller');
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
/* GET question page. */
router.get('/app-question', questionController.getQuestionPage);
/* GET product json api. */
// router.get('/api/app-product', questionController.getProductsApi);
// /* POST product insert page. */
router.post('/add-question', urlencodedParser, questionController.insertQuestion);
// /* POST product edit page. */
// router.post('/edit-product', urlencodedParser, questionController.editProduct);
// /* POST product remove page. */
// router.post('/remove-product', urlencodedParser, questionController.removeProduct);
module.exports = router;