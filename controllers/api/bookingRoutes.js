const router = require('express').Router();
const { Booking } = require('../../models');

// Create new booking

router.post('/', (req, res) => {
  Booking.create({
    session_datetime: req.body.day,
    session_name: req.body.session,
    service: req.body.service,
    // <!--TODO: set correct relation between dog & dog ID-->
    dog_id: req.body.dog,
  })
    .then((createdData) => res.json(createdData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
