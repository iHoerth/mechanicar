const express = require('express');
const appointmentsRouter = express.Router();

const getAppointments = require('../handlers/appointments/getAppointments');

appointmentsRouter.get('/', getAppointments);
appointmentsRouter.get('/:id', getAppointments);

module.exports = appointmentsRouter;
