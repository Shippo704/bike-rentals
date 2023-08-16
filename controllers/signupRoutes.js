const router = require('express').Router();
const {User} = require('../models');

//New User
router.post('/signup', async (req, res) => {
    try {
      const userData = await User.create(req.body);
  
       req.session.save(() => {
         req.session.user_id = userData.id;
         req.session.loggedIn = true;
  
        res.status(200).json(userData);
        console.log("signup OK");
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;
