const express = require('express');
const usersRouter = require('./usersRouter')

const router = express.Router();


//users
router.use('/users', usersRouter)




module.exports = router;