// models/db.js
const mongoose = require('mongoose');

require('./user.model');
require('./donation.model');
require('./volunteer.model');
require('./contact.model');
// require('./adoption.model'); // if exists

const dbURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/sharecare';

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('DB Error:', err));