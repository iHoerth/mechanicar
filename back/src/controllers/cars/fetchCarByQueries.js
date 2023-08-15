const { Car, Appointment } = require('../../db');

const fetchCarByQueries = async (queries) => {
  const cars = await Car.findAll({
    where: queries,
    include: Appointment,
  });
  return cars;
};

module.exports = { fetchCarByQueries };
