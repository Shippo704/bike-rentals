const router = require('express').Router();
const {User} = require('../models');

router.get('/', async (req, res) => {
  res.render('login');
});

  // Login
  router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne({ 
        where: { 
            name: req.body.username
        }});
        
      // Check if given email is registered
      if (!userData) {
        res.status(400).json({ 
            message: 'Incorrect username or password, please try again'
        });
        return;
      }
      console.log("username exists");
      // Check that password is correct
      const validPassword = await userData.checkPassword(req.body.password);
      
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect username or password, please try again' });
        return;
      }
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.loggedIn = true;
        
        res.json({ user: userData, message: 'You are now logged in!' });
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  // Logout
  router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      console.log('logout attempt');
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
    console.log('logout success');
  });

module.exports = router;
