// appserver/routes/authRoutes.js
const router = require('express').Router();
const authController = require('../controllers/authController.js');

router.get('/login', authController.loginPage);
router.post('/login', authController.login);
router.post('/register', authController.register);
router.get('/register', authController.registerPage);

module.exports = router;