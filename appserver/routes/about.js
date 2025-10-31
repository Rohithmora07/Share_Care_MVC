// routes/about.js
const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('pages/about', { title: 'About', page: 'about' });
});

module.exports = router;