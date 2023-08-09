const { Appointment } = require('../../db');

const fetchAppointmentByCarId = async (carId) => {
  const appointments = await Appointment.findAll({ where: { CarId: carId } });
  return appointments;
};

module.exports = { fetchAppointmentByCarId };
