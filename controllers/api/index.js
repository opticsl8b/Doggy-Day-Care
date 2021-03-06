const router = require('express').Router();
const userRoutes = require('./userRoutes');
const sessionRoutes = require('./sessionRoutes');
const dogRoutes = require('./dogRoutes');
const messageRoutes=require('./messgeRoutes')
const bookingRoutes=require('./bookingRoutes')

router.use('/users', userRoutes);
router.use('/session', sessionRoutes);
router.use('/dogs', dogRoutes);
router.use('/messages', messageRoutes);
router.use('/booking', bookingRoutes);

module.exports = router;
