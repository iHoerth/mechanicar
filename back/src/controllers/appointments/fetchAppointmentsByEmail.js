const { Appointments, User } = require('../../db');

const fetchAppointmentsByEmail = async (email) => {
  const user = await User.findOne({ where: { email: email } });
  const appointments = await Appointments.findAll({ where: { UserId: user.id } });
  return appointments;
};

module.exports = { fetchAppointmentsByEmail };
