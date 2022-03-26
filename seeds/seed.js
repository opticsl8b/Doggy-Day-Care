const sequelize = require('../config/connection');
const seedDog = require('./seedDog');
const seedBooking = require('./seedBooking');
const seedUser = require('./seedUser');
const seedActivity = require('./seedActivity');
const seedMessage = require('./seedMessage');


const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUser();
  console.log('\n----- USER SEEDED -----\n');

  await seedDog();
  console.log('\n----- DOG SEEDED -----\n');

  await seedBooking();
  console.log('\n----- BOOKING SEEDED -----\n');


  await seedActivity();
  console.log('\n----- ACTIVITY SEEDED -----\n');

  await seedMessage();
  console.log('\n----- MESSAGE SEEDED -----\n');


  process.exit(0);
};

seedAll();
