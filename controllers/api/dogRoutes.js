const router = require('express').Router();
const { Dog } = require('../../models');
const withAuth = require('../../utils/auth');

// GET all dogs /api/dogs

router.get('/', withAuth, (req, res) => {
  Dog.findAll({
    attributes: ['id', 'dog_name', 'gender', 'breed', 'age', 'size'],
    order: [['id', 'DESC']],
  })
    .then((dogs) => res.json(dogs))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Create a dog

router.post('/', withAuth, (req, res) => {
  Dog.create({
    dog_name: req.body.name,
    gender: req.body.gender,
    breed: req.body.breed,
    age: req.body.age,
    size: req.body.size,
    user_id: req.session.user_id,
    note: req.body.additionalInfo,
  })
    .then((createdData) => res.json(createdData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports=router;