const axios = require("axios")
const dotenv = require("dotenv")

dotenv.config()

const {API_CAR_KEY, API_CAR_HOST} = process.env
// ONLY 1000 REQUESTS PER MONTH
let options = {
    method: 'GET',
    url: 'https://car-data.p.rapidapi.com/cars',
    params: {
        limit: '50',
        page: '0'
    },
    headers: {
        'X-RapidAPI-Key': API_CAR_KEY,
        'X-RapidAPI-Host': API_CAR_HOST
    }
};

const getAllCars = async(req, res) => {
    try {
        options.params = {...options.params, ...req.query}
        const result = await axios.request(options);
        const cars = result.data
        res.status(200).json({
            status: "Success",
            payload: cars
        })
    } catch (err) {
        if (err instanceof Error) {
            res.status(400).json({ error: 'Invalid input' });
        } else {
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}



module.exports = getAllCars