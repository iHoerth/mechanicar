const {
  fetchAppointmentByCarId,
} = require('../../controllers/appointments/fetchAppointmentByCarId');
const { fetchAllAppointments } = require('../../controllers/appointments/fetchAllAppointments');

const getAppointments = async (req, res) => {
  const { id } = req.params;
  const parsedId = parseInt(id);
  console.log(parsedId);
  try {
    const appointments = parsedId
      ? await fetchAppointmentByCarId(parsedId)
      : await fetchAllAppointments();
    res.status(200).json({ status: 'SUCCESS', payload: appointments });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = getAppointments;
