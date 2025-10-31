const express = require('express');
const router = express.Router();

// Registration page (GET)
router.get('/', (req, res) => {
  // Render the register page under the pages/ directory to match controllers/views
  res.render('pages/register', { title: 'Register' });
});

// Registration form submission (POST)
router.post('/', (req, res) => {
  // Extract form data from req.body
  const { name, email, password } = req.body;
  // Save to database, add validation, handle errors, etc.
  // On successful registration:
  res.redirect('/auth/login');
  // Or on failure:
  // res.render('register', { error: 'Registration failed', ... });
});

module.exports = router;
