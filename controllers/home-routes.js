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

router.get('/home', async (req, res) => {
  try {
     res.render('homepage') //RENDERS HOMEPAGE WITH MAIN
   } catch (err) {
     console.log(err);
     res.status(500).json(err);
   }
});


 router.get('/manage', async (req, res) => {
  try {
     res.render('managedogs') //RENDERS MANAGEDOGS WITH MAIN
   } catch (err) {
     console.log(err);
     res.status(500).json(err);
   }
 });


 router.get('/book', async (req, res) => {
  try {
     res.render('servicebooker') //RENDERS SERVICEBOOKER WITH MAIN
   } catch (err) {
     console.log(err);
     res.status(500).json(err);
   }
 });


 router.get('/contact', async (req, res) => {
  try {
     res.render('contact') //RENDERS LANDER WITH MAIN
   } catch (err) {
     console.log(err);
     res.status(500).json(err);
   }
 });

 router.get('/calender', async (req, res) => {
  try {
     res.render('calender') //RENDERS LANDER WITH MAIN
   } catch (err) {
     console.log(err);
     res.status(500).json(err);
   }
 });

router.get('/addDog', async (req, res) => {
  try {
     res.render('addDog') //RENDERS LANDER WITH MAIN
   } catch (err) {
     console.log(err);
     res.status(500).json(err);
   }
});

module.exports = router;
