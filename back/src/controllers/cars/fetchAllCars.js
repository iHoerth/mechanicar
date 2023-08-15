const { Car, Appointment } = require('../../db');

const fetchAllCars = async () => {
  const cars = await Car.findAll({
    include: Appointment,
  });
  return cars;
};

module.exports = { fetchAllCars };
