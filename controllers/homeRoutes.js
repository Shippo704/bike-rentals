const router = require('express').Router();

router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('homepage');
});
router.get('/login', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('login');
});
router.get('/rental', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('rental');
});
router.get('/signup', async (req,res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('layouts/signup');
});

module.exports = router;
