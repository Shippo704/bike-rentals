const sequelize = require('../config/connection');
const seedVehicle = require('./vehicleData');
const seedLocation = require('./locationData');
const seedUser = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedLocation();
  await seedVehicle();


  await seedUser();

  process.exit(0);
};

seedAll();
