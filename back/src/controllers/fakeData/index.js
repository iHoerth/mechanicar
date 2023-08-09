const { faker } = require('@faker-js/faker');
const { User, Car } = require('../../db');

const generateFakeData = async (/* limit = 5 */) => {
  // limit > 50 && (limit = 50);
  for (let i = 0; i < 10; i++) {
    User.create({
      name: faker.internet.userName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
    });
  }
  // Appointments

  // Cars
  const generateFakeCars = async () => {
    for (let i = 0; i < 10; i++) {
      Car.create({
        brand: faker.vehicle.manufacturer(),
        model: faker.vehicle.vehicle(),
        year: 1990 + Math.floor(Math.random() * 32),
        plate: faker.vehicle.vrm(),
      });
    }
  };
  generateFakeCars();
};

module.exports = { generateFakeData };
