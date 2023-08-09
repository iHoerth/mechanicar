const { Appointments, Car } = require('../../db');

const fetchAppointmentsByPlate = async (plate) => {
  const car = await Car.findOne({ where: { plate: plate } });
  const appointments = await Appointments.findAll({ where: { CarPlate: Car.plate } });
  return appointments;
};

module.exports = { fetchAppointmentsByPlate };
