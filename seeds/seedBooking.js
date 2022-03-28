const { Booking } = require('../models/booking');

const bookingData = [
  {
    session_datetime: '30-03-2022 11:00:00',
    name: 'Obedience Training Level 1',
    created_at: '16-03-2022',
    updated_at: '17-03-2022',
  },
  {
    session_datetime: '30-03-2022 14:00:00',
    name: 'Obedience Training Level 2',
    created_at: '19-03-2022',
    updated_at: '21-03-2022',
  },
  {
    session_datetime: '25-03-2022 11:00:00',
    name: 'Grooming',
    created_at: '10-03-2022',
    updated_at: '15-03-2022',
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
