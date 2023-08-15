const { Car } = require('../../db');

const fetchCarByQueries = async (queries) => {
  const cars = await Car.findAll({ where: queries });
  console.log(cars);
  return cars;
};

module.exports = { fetchCarByQueries };
