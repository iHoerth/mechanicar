const { DataTypes } = require('sequelize');

const Car = (sequelize) => {
  return sequelize.define(
    'Car',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      brand: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      model: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      plate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};

module.exports = Car;
