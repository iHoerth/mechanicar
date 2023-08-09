const { fetchCarByPlate } = require("../../controllers/cars/fetchCarByPlate");



const getCarByPlate = async (req, res) => {
    try {
        const {plate} = req.query;
        console.log(plate, "AAAAAA")
        const car = await fetchCarByPlate(plate);
        console.log(car, "CULO")
        res.status(200).json({
            status: 'Success',
            payload: car,
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

module.exports = getCarByPlate;
