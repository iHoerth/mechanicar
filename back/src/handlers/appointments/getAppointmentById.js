const { fetchAppointmentById } = require('../../controllers/appointments/fetchAppointmentById');

const getAppointmentById = async (req, res) => {
  const { id } = req.params;
  const parsedId = parseInt(id, 10);
  try {
    const appointment = await fetchAppointmentById(parsedId);
    res.status(200).json({
      status: 'SUCCESS',
      payload: appointment,
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = { getAppointmentById };
