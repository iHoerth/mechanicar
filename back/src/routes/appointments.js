const express = require('express');
const appointmentsRouter = express.Router();

const getAllUsersAppointments = require('../handlers/appointments/getAllUsersAppointments');
const getAllUsersIdAppointments = require('../handlers/appointments/getUserIdAppointments');

appointmentsRouter.get('/:userId', getAllUsersAppointments);
appointmentsRouter.get('/', getAllUsersIdAppointments);

module.exports = appointmentsRouter;
