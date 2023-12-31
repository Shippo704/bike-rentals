const router = require('express').Router();
const {Vehicle} = require('../models');
const {Location} = require('../models');
const loggedIn = require('../utils/helpers');

router.get('/rental/:id', loggedIn, async (req, res) => {
    try {
        const vehicleData = await Vehicle.findByPk(req.params.id);
        res.render('rentOne', {
            vehicleData,
            loggedIn: req.session.loggedIn
        });
    }
    catch (err) {
        res.status(400).json(err)
    }
});

//Rent a Vehicle
router.put('/rental/:id', loggedIn, async (req, res) => {
    try{
        const vehicleData = await Vehicle.update(req.body, {
            where: {id: req.params.id}
        });
        res.status(200).json(vehicleData);
    }
    catch (err) {
        res.status(400).json(err)
    }
});

// Get all available vehicles at a specific location
router.get('/location/:id', loggedIn, async (req, res) => {
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
router.get('/vehicle/:type', loggedIn, async (req, res) => {
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
