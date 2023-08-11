const sequelize = require('../config/connection');
const seedVehicle = require('./vehicleData');
const seedLocation = require('./locationData');
const seedUser = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedVehicle();

  await seedLocation();

  await seedUser();

  process.exit(0);
};

seedAll();
