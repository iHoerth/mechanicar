const { fetchCarById } = require('../../controllers/cars/fetchCarById');


const getCarByid = async (req, res) => {
    try {
        const {id} = req.params
        const parsedId = parseInt(id)
        const car = await fetchCarById(parsedId)
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

module.exports = getCarByid;
