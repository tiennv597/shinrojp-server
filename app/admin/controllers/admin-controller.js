
module.exports.getLoginPage = function (req, res, next) { 
    res.render('page-login', { title: 'Express' });
};
module.exports.getIndexPage = function (req, res, next) { 
    res.render('index', { title: 'Express' });
};
