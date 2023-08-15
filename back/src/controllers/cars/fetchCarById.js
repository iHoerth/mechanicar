const { Car, Appointment } = require('../../db');

const fetchCarById = async (id) => {
  const car = await Car.findOne({
    where: { id: id },
    include: Appointment,
  });
  return car;
};

module.exports = { fetchCarById };
