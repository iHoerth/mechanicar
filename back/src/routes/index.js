const express = require('express');
const carRouter = require('./carRouter');
const usersRouter = require('./usersRouter')

const router = express.Router();


//users
router.use('/users', usersRouter)
router.use("/autos", carRouter)



module.exports = router;