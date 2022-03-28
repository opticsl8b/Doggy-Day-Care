const sequelize = require('../config/connection');
const seedDog = require('./seedDog');
const seedBooking = require('./seedBooking');
const seedUser = require('./seedUser');
const seedActivity = require('./seedActivity');
const seedMessage = require('./seedMessage');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  
  await seedUser();
  
  await seedDog();
  
  await seedBooking();
  
  await seedActivity();
  
  await seedMessage();
 
  process.exit(0);
};

seedAll();
