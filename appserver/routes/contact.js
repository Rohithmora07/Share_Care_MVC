// routes/contact.js
const router = require('express').Router();
const Contact = require('../models/contact.model');

router.get('/', (req, res) => {
  res.render('pages/contact', { title: 'Contact', page: 'contact' });
});

router.post('/', async (req, res) => {
  try {
    await Contact.create(req.body);
    res.redirect('/contact?sent=true');
  } catch (err) {
    res.render('pages/contact', { error: err.message });
  }
});

module.exports = router;