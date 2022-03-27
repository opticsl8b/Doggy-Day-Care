const router = require('express').Router();
const { User, Message } = require("../../models");

// Create new message

router.post('/', async (req, res) => {

  try {  
    const user = await User.findByPk(req.session.user_id);
    const msgData = await Message.create({    
    title: req.body.title,
    message_content: req.body.content,
  });
    msgData.setUser(user);
    res.json(msgData);
} catch (err) {
  console.log(err);
  res.status(500).json(err);
}
});

module.exports = router;
