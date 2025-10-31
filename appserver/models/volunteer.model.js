// appserver/models/volunteer.model.js
const mongoose = require('mongoose');

const VolunteerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  joinedDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Volunteer', VolunteerSchema);