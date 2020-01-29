
module.exports.getLoginPage = function (req, res, next) { 
    res.render('page-login', { title: 'Express' });
};
module.exports.getIndexPage = function (req, res, next) { 
    res.render('index', { title: 'Express' });
};
//   exports.postBike = (req, res, next) => {
//     const { bikeName, bikePrice, bikeDescription, bikeUrl } = req.body;
//     const bike = new Bike(bikeName, bikePrice, bikeDescription, bikeUrl);
//     bike.save();
  
//     res.redirect('/');
//   }
  
//   exports.getAdminProductsPage = (req, res, next) => {
//     Bike.fetchAll(bikes => {
//       res.render('admin/bikes', { pageTitle: 'Admin Products', path: '/admin/bikes', bikes });
//     });
//   }