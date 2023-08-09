const { Car } = require('../../db');

const fetchCarFromDb = async () => {
  const cars = await Car.findAll();
  return cars;
};

module.exports = { fetchCarFromDb };
