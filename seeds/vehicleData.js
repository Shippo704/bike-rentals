const { Vehicle } = require('../models');

const vehicleData = [
  {
    vehicleType: 'Electric bicycle EB2',
    make: 'Gotrax',
    model: 'EB2',
    colour: 'Black',
    isAvailable: true,
    price: 20,
    location: 1,
  },
  {
    vehicleType: 'Electric bicycle E-Wild C2',
    make: 'Emmo',
    model: 'E-Wild C2',
    colour: 'Red',
    isAvailable: true,
    price: 20,
    location: 2,
  },
  {
    vehicleType: 'Electric Scooter Urban T2',
    make: 'Emmo',
    model: 'Urban T2',
    colour: 'Blue-Black',
    isAvailable: true,
    price: 25,
    location: 3,
  },
  {
    vehicleType: 'Electric Scooter Transporter',
    make: 'SEGWAY Ninebot',
    model: 'Transporter ',
    colour: 'Black',
    isAvailable: true,
    price: 20,
    location: 4,
  },

  {
    vehicleType: 'Electric Scooter C35',
    make: 'Razor',
    model: 'C35 ',
    colour: 'Orange',
    isAvailable: true,
    price: 20,
    location: 5,
  },
];

const seedVehicle = () => Vehicle.bulkCreate(vehicleData);

module.exports = seedVehicle;