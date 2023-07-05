const express = require('express');
const carRouter = require('./carRouter');
const usersRouter = require('./usersRouter');
const appointmentsRouter = require('./appointments');
const { getFakeData } = require('../handlers/fakeData');

const router = express.Router();

//users
router.use('/users', usersRouter);
//appointments
router.use('/appointments', appointmentsRouter);
//cars
router.use('/cars', carRouter);
//fakeData
router.post('/fake', getFakeData);

module.exports = router;
