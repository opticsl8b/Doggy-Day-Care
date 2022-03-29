const { Activity } = require('../models');

const activityData = [
  {
    dog_id: 1,
    booking_id: 1,
  },
  {
    dog_id: 5,
    booking_id: 2,
  },
  {
    dog_id: 6,
    booking_id: 3,
  },
];

const seedActivity = () => Activity.bulkCreate(activityData);

module.exports = seedActivity;
