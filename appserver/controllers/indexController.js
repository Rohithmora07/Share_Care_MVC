// controllers/indexController.js
exports.getHome = (req, res) => {
  res.render('pages/home', { title: 'ShareCare – Home', page: 'home' });
};