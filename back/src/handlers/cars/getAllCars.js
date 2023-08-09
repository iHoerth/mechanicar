const dotenv = require('dotenv');
const { fetchCarFromDb } = require('../../controllers/cars/fetchCarsFromDb');

dotenv.config();

const getAllCars = async (req, res) => {
  try {
    const cars = await fetchCarFromDb();
    res.status(200).json({
      status: 'Success',
      payload: cars,
    });
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({ error: 'Invalid input' });
    } else {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

module.exports = getAllCars;
