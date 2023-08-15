const { Appointment } = require('../../db');

const fetchAllAppointments = async () => {
  const appointments = await Appointment.findAll();
  console.log(appointments);
  return appointments;
};

module.exports = { fetchAllAppointments };