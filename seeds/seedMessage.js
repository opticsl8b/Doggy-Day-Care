const { Message } = require('../models');

const messageData = [
  {
    title: 'Booking request for Basil',
    message_content:
      'Hi, I was wondering if you have any spots available for grooming next...',

    user_id: 1,
  },

  {
    title: 'Booking cancellation',
    message_content:
      'Hi, I just wanted to let you know that unfortunately, I am not going to be able to...',

    user_id: 2,
  },

  {
    title: 'Checking availability for accommodation',
    message_content: 'Hi, we are planning to go on a holiday to Bali ...',

    user_id: 1,
  },

  {
    title: 'Obedience training',
    message_content:
      'Hi, I just wondering when does the period for enrolment starts? ...',

    user_id: 2,
  },

  {
    title: 'Feedback',
    message_content: 'Hi, I would like to thank...',

    user_id: 5,
  },
];

const seedMessage = () => Message.bulkCreate(messageData);

module.exports = seedMessage;
