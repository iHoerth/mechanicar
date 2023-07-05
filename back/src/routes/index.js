const express = require('express');
const usersRouter = require('./usersRouter')
const appointmentsRouter = require("./appointments") 
const router = express.Router();


//users
router.use('/users', usersRouter)

//appointments 
router.use('/appointments', appointmentsRouter)




module.exports = router;