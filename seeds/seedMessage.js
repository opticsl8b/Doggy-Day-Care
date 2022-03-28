const { Message } = require('../models/message');
const { User } = require('../models/user');

const messageData = [
  {
    title: 'Booking request for Basil',
    message_content:
      'Hi, I was wondering if you have any spots available for grooming next...',
    created_at: '27-03-2022',
    updated_at: '28-03-2022',
    user_id: User,
  },

  {
    title: 'Booking cancellation',
    message_content:
      'Hi, I just wanted to let you know that unfortunately, I am not going to be able to...',
    created_at: '21-03-2022',
    updated_at: '23-03-2022',
    user_id: User,
  },

  {
    title: 'Checking availability for accommodation',
    message_content: 'Hi, we are planning to go on a holiday to Bali ...',
    created_at: '2-03-2022',
    updated_at: '15-03-2022',
    user_id: User,
  },

  {
    title: 'Obedience training',
    message_content:
      'Hi, I just wondering when does the period for enrolment starts? ...',
    created_at: '12-03-2022',
    updated_at: '13-03-2022',
    user_id: User,
  },

  {
    title: 'Feedback',
    message_content: 'Hi, I would like to thank...',
    created_at: '10-03-2022',
    updated_at: '21-03-2022',
    user_id: User,
  },
];

const seedMessage = () => Message.bulkCreate(messageData);

module.exports = seedMessage;
