const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const loginRoutes = require('./loginRoutes');
const rentalRoutes = require('./rentalRoutes');

router.use('/', homeRoutes);
router.use('/', loginRoutes);
router.use('/', rentalRoutes);

module.exports = router;
