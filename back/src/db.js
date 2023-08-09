const Sequelize = require('sequelize');
require('dotenv').config();
const { DB_NAME, DB_PORT, DB_PASSWORD, DB_USER, DB_HOST } = process.env;

const CarModel = require('../src/models/Car');
const UserModel = require('../src/models/User');
const AppointmentModel = require('../src/models/Appointment')
// const AppointmentModel = require('../src/models/Appointment');

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  { logging: false }
);

CarModel(sequelize);
UserModel(sequelize);
AppointmentModel(sequelize);

const { Car, User, Appointment } = sequelize.models;

// CAR <==> USER
Car.belongsTo(User);
User.hasMany(Car);

// CAR <==> APPOINTMENT
Car.hasMany(Appointment);
Appointment.belongsTo(Car);

// USER <==> APPOINTMENT
User.hasMany(Appointment);
Appointment.belongsTo(User);

// User.belongsToMany(Appointment, { through: 'appointments_users' });
// Appointment.belongsToMany(User, { through: 'appointments_users' });

sequelize
  .authenticate()
  .then(() => console.log('Connected to the database'))
  .catch((error) => console.error('Unable to connect to the database:', error));

sequelize
  .query('SELECT current_database()')
  .then((result) => {
    console.log('Nombre de la base de datos:', result[0][0].current_database);
  })
  .catch((err) => {
    console.log('Error:', err);
  });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
