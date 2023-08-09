const router = require('express').Router();

router.get('/', async (req, res) => {
  res.render('rental');
});

module.exports = router;
