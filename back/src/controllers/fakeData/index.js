const { faker } = require('@faker-js/faker');
const { User } = require('../../db');

const generateFakeData = async (/* limit = 5 */) => {
  // limit > 50 && (limit = 50);
  for (let i = 0; i < 10; i++) {
    User.create({
      name: faker.internet.userName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
    });

    // Appointments

    // Cars
  }
};

module.exports = { generateFakeData };
