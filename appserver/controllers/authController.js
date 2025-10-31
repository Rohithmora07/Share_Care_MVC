// appserver/controllers/authController.js

exports.loginPage = (req, res) => {
  res.render('pages/login', { title: 'Login' });
};

exports.registerPage = (req, res) => {
  res.render('pages/register', { title: 'Register' });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  // Simple mock authentication (replace with DB later)
  if (email === 'admin@gmail.com' && password === '12345') {
    req.session.user = { email };
    return res.redirect('/dashboard');
  }

  res.render('pages/login', {
    title: 'Login',
    error: 'Invalid credentials! Please try again.',
  });
};

exports.register = (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.render('pages/register', {
      title: 'Register',
      error: 'All fields are required.',
    });
  }

  // TODO: Save to DB here
  res.render('pages/login', {
    title: 'Login',
    success: 'Registration successful! Please login.',
  });
};
