const router = require('express').Router();
const { User } = require('../../models');

// GET all users /api/users
router.get('/', (req, res) => {
  User.findAll({
    attributes: { exclude: ['password'] },
  })
    .then((users) => res.json(users))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//  Add user with login scenario

router.post('/', async (req, res) => {

  try {
    const dbUserData = await User.create({
      email: req.body.email,
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      phone_number: req.body.phoneNumber,
      address: req.body.address,
      password: req.body.password,
    });

      req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user_id = dbUserData.id;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/login', (req, res) => {
  User.findOne({
    where: { email: req.body.email },
  }).then((loginData) => {
    if (!loginData) {
      res.status(400).json({ message: 'No User with that Email was found' });
      return;
    }
    // Verify user
    const isPassword = loginData.checkPw(req.body.password);

    if (!isPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    req.session.user_id = loginData.id;
    req.session.username = loginData.username;
    req.session.loggedIn = true;

    res.json({ user: loginData, message: 'Login successful' });
  });
});

// update User
router.put('/:id', (req, res) => {
  User.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((updateData) => {
      if (!updateData) {
        res.status(400).json({ message: 'No User found with this id' });
        return;
      }
      res.json(updateData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete user
router.delete('/:id', (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(400).json({ message: 'No User found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// log out
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      // 204 indicate request succeeded but user stays at current page
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
