const Volunteer = require('../models/volunteer.model.js');

exports.getAllVolunteers = async (req, res) => {
  const volunteers = await Volunteer.find();
  res.render('pages/volunteer', { volunteers });
};

exports.createVolunteer = async (req, res) => {
  const { name, role } = req.body;
  await Volunteer.create({ name, role });
  res.redirect('/volunteers');
};