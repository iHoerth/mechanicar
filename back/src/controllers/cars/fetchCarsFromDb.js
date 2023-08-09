const { Car } = require('../../db');

const fetchCarFromDb = async () => {
  const cars = await Car.findAll();
  console.log(cars);
  return cars;
};

module.exports = { fetchCarFromDb };
