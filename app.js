// app.js
require('dotenv').config();
require('./appserver/models/db'); // ← DB

const express = require('express');
const path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo');

// ROUTES IMPORT
const indexRouter        = require('./appserver/routes/index.js');
const authRoutes         = require('./appserver/routes/authRoutes.js');
const donationsRoutes    = require('./appserver/routes/donations.js');
const volunteersRoutes   = require('./appserver/routes/volunteers.js');
const aboutRouter        = require('./appserver/routes/about.js');
const contactRouter      = require('./appserver/routes/contact.js');
const registerRouter     = require('./appserver/routes/register.js'); // ← NEW

const app = express();

// === SESSION SETUP ===
app.use(session({
  secret: process.env.SESSION_SECRET || 'fallback_secret_change_in_production',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/sharecare'
  }),
  cookie: {
    maxAge: 1000 * 60 * 60 * 24, // 1 day
    httpOnly: true,
    secure: false // Set true if using HTTPS
  }
}));

// === MIDDLEWARE ===
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'appserver', 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'appserver', 'public')));

// === ROUTES ===
app.use('/', indexRouter);
app.use('/auth', authRoutes);
app.use('/donations', donationsRoutes);
app.use('/volunteers', volunteersRoutes);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);
app.use('/register', registerRouter); // ← NEW

// === 404 HANDLER ===
app.use((req, res) => {
  console.log(`404 | ${req.method} ${req.url}`);
  res.status(404).render('error', { 
    title: '404 - Page Not Found',
    message: 'The page you are looking for does not exist.',
    statusCode: 404
  });
});

// === GLOBAL ERROR HANDLER ===
app.use((err, req, res, next) => {
  console.error('Error:', {
    message: err.message,
    stack: err.stack,
    url: req.url,
    method: req.method
  });

  const statusCode = err.status || err.statusCode || 500;
  const errorDetails = app.get('env') === 'development' ? {
    title: `Error ${statusCode}`,
    message: err.message,
    stack: err.stack,
    statusCode
  } : {
    title: 'Something went wrong',
    message: 'An error occurred. Please try again later.',
    statusCode
  };

  res.status(statusCode).render('error', errorDetails);
});

// === START SERVER ===
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
