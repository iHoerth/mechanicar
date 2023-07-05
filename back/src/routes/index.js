const express = require('express');
const carRouter = require('./carRouter');
const usersRouter = require('./usersRouter')
const appointmentsRouter = require("./appointments") 
const router = express.Router();


//users
router.use('/users', usersRouter)

//appointments 
router.use('/appointments', appointmentsRouter)


router.use("/autos", carRouter)




module.exports = router;