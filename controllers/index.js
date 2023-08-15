const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const loginRoutes = require('./loginRoutes');
const rentalRoutes = require('./rentalRoutes');
const signupRoutes = require('./signupRoutes');

router.use('/', homeRoutes);
router.use('/', loginRoutes);
router.use('/', rentalRoutes);
router.use('/', signupRoutes);

module.exports = router;
