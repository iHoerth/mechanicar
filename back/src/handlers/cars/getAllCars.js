const dotenv = require('dotenv');
const { fetchCarFromDb } = require('../../controllers/cars/fetchCarsFromDb');
const { fetchCarByPlate } = require('../../controllers/cars/fetchCarByPlate');

dotenv.config();

const getAllCars = async (req, res) => {
    try {
        const {plate} = req.query
        console.log(plate)
        
        const filteredData = plate ? await fetchCarByPlate(plate) : await fetchCarFromDb();
        console.log(filteredData)
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
