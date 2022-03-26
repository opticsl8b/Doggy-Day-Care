const { TIME } = require('sequelize/types');
const { Message } = require('../models/message');
const User = require('../models/User');

const messageData = [
  {
    title:"Booking request for Basil",
    message_content: "Hi, I was wondering if you have any spots available for grooming next...",
    created_at: sysdate(TIME),
    updated_at: sysdate(TIME),
    user_id: User,
  },

  {
    title: "Booking cancellation",
    message_content: "Hi, I just wanted to let you know that unfortunately, I am not going to be able to...",
    created_at: sysdate(TIME),
    updated_at: sysdate(TIME),
    user_id: User,
  },

  {
    title: "Checking availability for accommodation",
    message_content: "Hi, we are planning to go on a holiday to Bali ...", 
    created_at: sysdate(TIME),
    updated_at: sysdate(TIME),
    user_id: User,
  },

  {
    title: "Obedience training",
    message_content: "Hi, I just wwondering when does the period for enrolment starts? ...",
    created_at: sysdate(TIME),
    updated_at: sysdate(TIME),
    user_id: User,
  },

  {
    title:"Feedback", 
    message_content: "Hi, I would like to thank...",
    created_at: sysdate(TIME),
    updated_at: sysdate(TIME),
    user_id: User,
  },

];

const seedMessage = () => Message.bulkCreate(messageData);

module.exports = {seedMessage};
