// appserver/routes/donations.js
const router = require('express').Router();
const donationsController = require('../controllers/donationsController.js');

router.get('/', donationsController.getAll);        // ← uses exports.getAll
router.post('/add', donationsController.create);    // ← uses exports.create

module.exports = router;