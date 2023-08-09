const { Car } = require('../../db');

const fetchAllCars = async () => {
  const cars = await Car.findAll();
  return cars;
};

module.exports = { fetchAllCars };
