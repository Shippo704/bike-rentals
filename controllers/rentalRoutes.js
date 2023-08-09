const router = require('express').Router();
const {Vehicle} = require('../models');
const {Location} = require('../models');

// Default rental page
router.get('/', async (req, res) => {
  res.render('rental');
});

// Get all available vehicles at a specific location
router.get('/location/:id', async (req, res) => {
    try {
        const vehicleByLocData = await Vehicle.findAll({
            where: {
                location: req.params.id,
                isAvailable: true
            }
        });
        res.status(200).json(vehicleByLocData);
    }
    catch (err) {
        res.status(400).json(err);
    }
});

// Get all of specific vehicle type that are available
router.get('/vehicle/:type', async (req, res) => {
    try {
        const vehicleData = await Vehicle.findAll({
            where: {
                vehicleType: req.params.type,
                isAvailable: true
            }
        });
        res.status(200).json(vehicleData);
    }
    catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
