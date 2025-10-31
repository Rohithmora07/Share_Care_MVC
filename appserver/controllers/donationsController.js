// appserver/controllers/donationsController.js
const Donation = require('../models/donation.model.js');

// GET: Show donations page
exports.getAll = async (req, res) => {
  try {
    const donations = await Donation.find().sort({ date: -1 });
    res.render('pages/donate', {
      title: 'Donate',
      page: 'donations',
      donations
    });
  } catch (err) {
    res.status(500).render('error', { message: 'Failed to load donations' });
  }
};

// POST: Save donation
exports.create = async (req, res) => {
  try {
    const { donorName, amount, message } = req.body;
    await Donation.create({
      donorName,
      amount: Number(amount),
      message
    });
    res.redirect('/donations');
  } catch (err) {
    res.status(500).render('error', { message: 'Failed to save donation' });
  }
};