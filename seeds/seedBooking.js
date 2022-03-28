// const { TIME } = require('sequelize/types');
const { Booking } = require('../models');

const bookingData = [
  {
    session_datetime: '2022-03-25 14:00:00',
    session_name: 'Obedience Training Level 1',
    user_id: 1,
  },
  {
    session_datetime: '2022-03-25 11:00:00',
    session_name: 'Obedience Training Level 2',
    user_id: 2,
  },
  {
    session_datetime: '2022-03-25 10:00:00',
    session_name: 'Grooming',
    user_id: 3,
  },
  {
    session_datetime: '2022-03-25 14:00:00',
    session_name: 'Obedience Training Level 1',
    user_id: 4,
  },
  {
    session_datetime: '2022-03-25 11:00:00',
    session_name: 'Obedience Training Level 2',
    user_id: 5,
  },
  {
    session_datetime: '2022-03-25 10:00:00',
    session_name: 'Grooming',
    user_id: 6,
  },
];

const seedBooking = () => Booking.bulkCreate(bookingData);

module.exports = seedBooking;
