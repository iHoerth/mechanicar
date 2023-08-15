const { where } = require('sequelize');
const { Car } = require('../../db');

const fetchCarById = async (id) => {
  const car = await Car.findOne({ where: { id: id } });
  return car;
};

module.exports = { fetchCarById };
