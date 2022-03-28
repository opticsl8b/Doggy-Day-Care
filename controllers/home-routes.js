const router = require('express').Router();
const { Activity, Dog, User, Booking, Message } = require('../models');
const withAuth = require('../utils/auth');

// signup endpoint
router.get('/signup', (req, res) => {
  // check session and redirect to the homepage if exists
  if (req.session.loggedIn) {
    res.redirect('/home');
    return;
  }
  res.render('signup');
});

// login endpoint
router.get('/login', (req, res) => {
  // check  session and redirect to the homepage if exists
  if (req.session.loggedIn) {
    res.redirect('/home');
    return;
  }
  res.render('login');
});

// Gets Landing Page
router.get('/', async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/home');
    return;
  }
  try {
    res.render('lander'); //RENDERS LANDER WITH MAIN
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/home', withAuth, async (req, res) => {
  try {
    var userID = req.session.user_id;

    const userData = await User.findOne({
      where: {
        id: userID,
      },
      raw: true,
    });

    console.log(userData);

    res.render('homepage', { userData, loggedIn: true }); //RENDERS HOMEPAGE WITH MAIN
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/manage', async (req, res) => {
  try {
    var userID = req.session.user_id;

    const dogData = await Dog.findAll({
      where: {
        user_id: userID,
      },
      raw: true,
    });

    if (dogData) {
      res.render('managedogs', { dogData, loggedIn: req.session.loggedIn }); //RENDERS MANAGEDOGS WITH MAIN
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/book', async (req, res) => {
  try {
    var userID = req.session.user_id;

    const dogData = await Dog.findAll({
      where: {
        user_id: userID,
      },
      raw: true,
    });

    if (dogData) {
      res.render('servicebooker', { dogData, loggedIn: req.session.loggedIn }); //RENDERS SERVICEBOOKER WITH MAIN
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/contact', async (req, res) => {
  try {
    res.render('contact', { loggedIn: req.session.loggedIn }); //RENDERS CONTACT WITH MAIN
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/appointments', async (req, res) => {
  try {
    var userID = req.session.user_id;
    const bookingData = await Booking.findAll({
      include: [{ model: Dog, through: Activity }],
      where: {
        user_id: userID,
      },
      // raw: true,
    });
    console.log(bookingData.map((b) => b.get({ plain: true })));
    if (bookingData) {
      res.render('myAppts', {
        bookingData: bookingData.map((b) => b.get({ plain: true })),
        loggedIn: req.session.loggedIn,
      });
    }

    if (!bookingData) {
      res.redirect('/book');
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/addDog', async (req, res) => {
  try {
    res.render('addDog', { loggedIn: req.session.loggedIn }); //RENDERS ADD DOG WITH MAIN
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('*', (req, res) => {
  // check  session and redirect to the homepage if exists
  if (req.session.loggedIn) {
    res.redirect('/home');
    return;
  }
  res.render('login');
});

module.exports = router;
