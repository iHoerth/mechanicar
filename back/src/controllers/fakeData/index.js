const { faker } = require('@faker-js/faker');
const { User, Car } = require('../../db');

const generateFakeData = async (/* limit = 5 */) => {
  const createdUsers = [];
  // limit > 50 && (limit = 50);
  for (let i = 0; i < 10; i++) {
    const user = await User.create({
      name: faker.internet.userName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
    });
    createdUsers.push(user);
  }
  // Appointments

  // Cars
  const generateFakeCars = async () => {
    for (let i = 0; i < 10; i++) {
      const randomUserId = createdUsers[Math.floor(Math.random() * createdUsers.length)].id;
      Car.create({
        brand: faker.vehicle.manufacturer(),
        model: faker.vehicle.vehicle(),
        year: 1990 + Math.floor(Math.random() * 32),
        plate: faker.vehicle.vrm(),
        UserId: randomUserId,
      });
    }
  };
  generateFakeCars();
};

module.exports = { generateFakeData };
