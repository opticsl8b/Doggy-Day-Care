const { Message } = require('../models/message');

const messageData = [
  {
    title: '2022-03-25 14:00:00',
    message_content: 'Obedience Training Level 2',
    created_at: sysdate(),
    updated_at: sysdate(),
    user_id: 1
  },
  
];

const seedMessage = () => Message.bulkCreate(messageData);

module.exports = seedMessage; 
