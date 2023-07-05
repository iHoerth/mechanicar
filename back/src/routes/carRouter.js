const express = require("express")
const axios = require("axios")
const dotenv = require("dotenv")


dotenv.config()

const {API_CAR_KEY, API_CAR_HOST} = process.env

const options = {
    method: 'GET',
    url: 'https://car-data.p.rapidapi.com/cars',
    params: {
        limit: '25',
        page: '0'
    },
    headers: {
        'X-RapidAPI-Key': API_CAR_KEY,
        'X-RapidAPI-Host': API_CAR_HOST
    }
};
const carRouter = express.Router()



carRouter.get("/", async (req, res) => {
    try {
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
})









module.exports = carRouter