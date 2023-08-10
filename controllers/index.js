const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const loginRoutes = require('./loginRoutes');
const rentalRoutes = require('./rentalRoutes');

router.use('/', homeRoutes);
router.use('/api', loginRoutes);
router.use('/api', rentalRoutes);

module.exports = router;
