const express = require('express');
const appointmentsRouter = express.Router();

const getAppointments = require('../handlers/appointments/getAppointments');

appointmentsRouter.get('/', getAppointments);

module.exports = appointmentsRouter;
