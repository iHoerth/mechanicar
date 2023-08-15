const { Appointment } = require('../../db');

const fetchAppointmentById = async (id) => {
  const appointment = await Appointment.findByPk(id);
  return appointment;
};

module.exports = { fetchAppointmentById };
