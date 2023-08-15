const { Car } = require('../../db');

const fetchCarByPlate = async (plate) => {
  const car = await Car.findOne({ where: { plate: plate } });
  console.log(car);
  return car;
};

module.exports = { fetchCarByPlate };
