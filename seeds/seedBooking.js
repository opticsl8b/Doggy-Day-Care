const { Booking } = require('../models');

const bookingData = [
  {
    session_datetime: '2022-04-25 14:00:00',
    session_name: 'Obedience Training Level 2',
    user_id: 1,
  },
  {
    session_datetime: '2022-05-25 14:00:00',
    session_name: 'Obedience Training Level 1',
    user_id: 2,
  },
  {
    session_datetime: '2022-04-25 11:00:00',
    session_name: 'Grooming',
    user_id: 3,
  },
];

const seedBooking = () => Booking.bulkCreate(bookingData);

module.exports = seedBooking;
