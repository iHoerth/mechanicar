const { Car, Appointment } = require('../../db');

const fetchCarByPlate = async (plate) => {
  const car = await Car.findOne({
    where: { plate: plate },
    include: Appointment,
  });
  console.log(car);
  return car;
};

module.exports = { fetchCarByPlate };
