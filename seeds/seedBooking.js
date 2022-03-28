// const { TIME } = require('sequelize/types');
const { Booking } = require('../models');

const bookingData = [
  {
    session_datetime: '2022-03-25 14:00:00',
    session_name: 'Obedience Training Level 2',
    user_id: 1,
    // created_at: sysdate(TIME),
    // updated_at: sysdate(TIME),
  },
  // {
  //   session_datetime: '022-03-25 14:00:00',
  //   name: 'Obedience Training Level 1',
  //   created_at: sysdate(TIME),
  //   updated_at: sysdate(TIME),
  // },
  // {
  //   session_datetime: '2022-03-25 11:00:00',
  //   name: 'Grooming',
  //   created_at: sysdate(TIME),
  //   updated_at: sysdate(TIME),
  // },
];

const seedBooking = () => Booking.bulkCreate(bookingData);

module.exports = seedBooking;
