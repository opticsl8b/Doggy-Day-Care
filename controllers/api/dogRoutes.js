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

//Get Dog by ID for Editing

router.get('/:id', withAuth, async (req, res) => {
  
  try {
  
  dogData = await Dog.findByPk(req.params.id, {
    attributes: ['id', 'dog_name', 'gender', 'breed', 'age', 'size', 'note'],
    raw: true,
    
  })

  if(dogData){   
   
    console.log(dogData);
    
    res.render('editDog', { dogData, loggedIn: req.session.loggedIn } );
    }

    if(!dogData) {
      res.redirect('/manage');
    }
    } catch(err) {
      console.log(err);
      res.status(500).json(err);
    }
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

//Update a Dog
router.put('/:id', withAuth, async (req, res) => {
  
  try {
  
  const dogData = await Dog.update(
    {
      dog_name: req.body.name,
      gender: req.body.gender,
      age: req.body.age,
      breed: req.body.breed,
      size: req.body.size,
      note: req.body.additionalInfo,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  );
  res.status(200).json(dogData);
} catch (err) {
  console.log(err);
}
});


//Delete a Dog
router.delete('/:id', withAuth, async (req, res) => {
  
  try {
  
  const dogData = await Dog.destroy(
    {
      where: {
        id: req.params.id,
      },
    }
  );
  res.status(200).json(dogData);
} catch (err) {
  console.log(err);
}
});


module.exports=router;