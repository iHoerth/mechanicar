const { faker } = require('@faker-js/faker');
const { User, Car, Appointment } = require('../../db');

const generateFakeData = async (limit = 10) => {
  const createdUsers = [];
  const createdAppointments = [];
  const createdCars = [];

  const userZero = await User.create({
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    phone: 12345678,
  });
  createdUsers.push(userZero);

  const carZero = await Car.create({
    brand: 'Ford',
    model: 'Fiesta',
    year: 2023,
    plate: 'AAA',
    userId: userZero.id,
  });
  createdCars.push(carZero);

  const appointmentZero = await Appointment.create({
    issueDate: '8/8/2023',
    deadline: '8/9/2023',
    price: faker.commerce.price({ symbol: '$', min: 3000, max: 10000 }),
    description: faker.lorem.sentence(3),
    CarId: carZero.id,
  });
  createdAppointments.push(appointmentZero);

  // Users
  for (let i = 0; i < limit; i++) {
    const user = await User.create({
      name: faker.internet.userName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
    });
    createdUsers.push(user);
  }

  // Cars
  for (let i = 0; i < limit; i++) {
    const randomUserId = createdUsers[Math.floor(Math.random() * createdUsers.length)].id;
    const car = await Car.create({
      brand: faker.vehicle.manufacturer(),
      model: faker.vehicle.vehicle(),
      year: 1990 + Math.floor(Math.random() * 32),
      plate: faker.vehicle.vrm(),
      UserId: randomUserId,
    });
    createdCars.push(car);
  }

  // Appointments
  for (let i = 0; i < limit; i++) {
    const randomCarId = createdCars[Math.floor(Math.random() * createdCars.length)].id;
    const appointment = await Appointment.create({
      issueDate: faker.date.recent().toString(),
      deadline: faker.date.soon().toString(),
      price: faker.commerce.price({ symbol: '$', min: 3000, max: 10000 }),
      description: faker.lorem.sentence(3),
      CarId: randomCarId,
    });
    createdAppointments.push(appointment);
  }
};

module.exports = { generateFakeData };
