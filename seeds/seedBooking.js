const Booking = require('../models/booking');

const bookingData = [
  {
    session_datetime: '2022-03-25 14:00:00',
    name: 'Obedience Training Level 2',
    created_at: '2022-03-16',
    updated_at: '2022-03-17'
  },
  // {
  //   session_datetime: '022-03-25 14:00:00',
  //   name: 'Obedience Training Level 1',
  //   created_at: Datatype.TIME,
  //   updated_at: Datatype.TIME,
  // },
  // {
  //   session_datetime: '2022-03-25 11:00:00',
  //   name: 'Grooming',
  //   created_at: Datatype.TIME,
  //   updated_at: Datatype.TIME,
  // },
];

const seedBooking = () => Booking.bulkCreate(bookingData);

module.exports = seedBooking;
