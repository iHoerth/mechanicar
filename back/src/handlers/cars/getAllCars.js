const dotenv = require('dotenv');
const { fetchAllCars } = require('../../controllers/cars/fetchAllCars');
const { fetchCarByQueries } = require('../../controllers/cars/fetchCarByQueries');

dotenv.config();

const getAllCars = async (req, res) => {
  try {
    const { brand, model, year, plate } = req.query;
    /* const queries = {} */
    const queries = {
      ...(brand && { brand }),
      ...(model && { model }),
      ...(year && { year: parseInt(year) }),
      ...(plate && { plate }),
    };
    console.log(queries);
    const hasQueries = Object.keys(queries).length ? true : false;

    const filteredData = hasQueries ? await fetchCarByQueries(queries) : await fetchAllCars();
    /* console.log(filteredData) */
    res.status(200).json({
      status: 'Success',
      payload: filteredData,
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
