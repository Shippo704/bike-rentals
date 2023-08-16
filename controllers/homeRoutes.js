const router = require('express').Router();
const {Vehicle, Location} = require('../models');
const loggedIn = require('../utils/helpers');

router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('homepage', {
    //loggedIn: req.session.loggedIn
  });
});
router.get('/login', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('login', {
    //loggedIn: req.session.loggedIn
});
});

//GET Rental Page
router.get('/rental', async (req, res) => {
  try {
      const vehicleData = await Vehicle.findAll({});
      const vehicles = vehicleData.map((vehicle) =>
        vehicle.get({plain:true})
      );
      //console.log(vehicles);
      console.log(vehicles[0]);
      // Send the rendered Handlebars.js template back as the response
    res.render('rental', {
      vehicles,
      //loggedIn: req.session.loggedIn
    });
    }
    catch (err) {
      res.status(400).json(err);
    }
});
router.get('/signup', async (req,res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render('signup', {
    //loggedIn: req.session.loggedIn
  });
});

module.exports = router;
