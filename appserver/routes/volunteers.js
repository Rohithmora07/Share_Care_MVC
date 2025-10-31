// appserver/routes/volunteers.js
const router = require('express').Router();
const volunteersController = require('../controllers/volunteersController.js');

// GET: Show all volunteers
router.get('/', volunteersController.getAllVolunteers);

// POST: Add new volunteer
router.post('/add', volunteersController.createVolunteer);

module.exports = router;