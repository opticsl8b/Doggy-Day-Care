const router = require('express').Router();
const userRoutes = require('./userRoutes');
const sessionRoutes=require("./sessionRoutes")

router.use('/users', userRoutes);
router.use("/session",sessionRoutes)

module.exports = router;
