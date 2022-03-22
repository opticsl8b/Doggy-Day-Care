const router = require('express').Router();
const { Activity, Dog, User, Booking } = require('../models');


// Gets Landing Page
router.get('/', async (req, res) => {
 try {
    res.render('lander') //RENDERS LANDER WITH MAIN
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
