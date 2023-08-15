const express = require('express');
const appointmentsRouter = express.Router();

const { getAppointments } = require('../handlers/appointments/getAppointments');
const { getAppointmentById } = require('../handlers/appointments/getAppointmentById');

appointmentsRouter.get('/', getAppointments);
appointmentsRouter.get('/:id', getAppointmentById);

module.exports = appointmentsRouter;
