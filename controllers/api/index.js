const router = require('express').Router();
const userRoutes = require('./userRoutes');
const sessionRoutes = require('./sessionRoutes');
const dogRoutes = require('./dogRoutes');

router.use('/users', userRoutes);
router.use('/session', sessionRoutes);
router.use('/dogs', dogRoutes);

module.exports = router;
