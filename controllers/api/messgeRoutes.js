const router = require('express').Router();
const { Message }=require('../../models');


// Create new message

router.post('/', (req, res) => {
    Message.create({
        title: req.body.title,
        message_content: req.body.content,
           
    })
      .then((createdData) => res.json(createdData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  module.exports = router;