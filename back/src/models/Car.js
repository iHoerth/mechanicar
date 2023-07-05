const { DataTypes } = require('sequelize');

const Car = (sequelize) => {
  return sequelize.define(
    'Car',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      brand: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      model: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      plate: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      timestamps: false,
    }
  );
};

module.exports = Car;
