// routes/volunteers.js
const router = require('express').Router();
const volunteersController = require('../controllers/volunteersController');

router.get('/', volunteersController.getAllVolunteers);
router.post('/add', volunteersController.createVolunteer); // matches form action="/volunteers/add"

module.exports = router;