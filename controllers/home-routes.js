const router = require('express').Router();
const { Activity, Dog, User, Booking } = require('../models');

// signup endpoint
router.get("/signup", (req, res) => {
  // check session and redirect to the homepage if exists
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("signup");
});

// login endpoint
router.get("/login", (req, res) => {
  // check  session and redirect to the homepage if exists
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

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
