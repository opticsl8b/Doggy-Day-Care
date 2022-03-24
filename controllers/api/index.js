const router = require('express').Router();
const userRoutes = require('./userRoutes');
const sessionRoutes=require("./session-routes")

router.use('/users', userRoutes);
router.use("/session",sessionRoutes)

module.exports = router;
