const { DataTypes } = require('sequelize');

const Appointment = (sequelize) => {
  return sequelize.define(
    'Appointment',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      issueDate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      deadline: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING,
      },
    },
    {
      timestampse: false,
    }
  );
};

module.exports = Appointment;

//CULO
