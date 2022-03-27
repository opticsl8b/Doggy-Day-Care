const { Activity } = require('../models/dog');

const activityData = [
  {
    dog_id: 1,
    booking_id: 4,
  },
  {
    dog_id: 2,
    booking_id: 5,
  },
  {
    dog_id: 3,
    booking_id: 6,
  },
  {
    dog_id: 5,
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
  {
    dog_id: 7,
    booking_id: 9,
  },
  {
    dog_id: 8,
    booking_id: 7,
  },
  {
    dog_id: 9,
    booking_id: 8,
  },
];

const seedActivity = () => Activity.bulkCreate(activityData);

module.exports = seedActivity;
