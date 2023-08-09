const axios = require('axios');
const {
  fetchAppointmentsByEmail,
} = require('../../controllers/appointments/fetchAppointmentsByEmail');
const {
  fetchAppointmentsByPlate,
} = require('../../controllers/appointments/fetchAppointmentsByPlate');

const getAppointments = async (req, res) => {
  const { email, plate } = req.query;
  try {
    const appointments = email
      ? await fetchAppointmentsByEmail(email)
      : await fetchAppointmentsByPlate(plate);
    res.status(200).json({ status: 'SUCCESS', payload: appointments });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = getAppointments;
