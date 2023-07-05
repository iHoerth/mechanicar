const express = require("express")
const axios = require("axios")

const options = {
    method: 'GET',
    url: 'https://car-data.p.rapidapi.com/cars',
    params: {
        limit: '10',
        page: '0'
    },
    headers: {
        'X-RapidAPI-Key': '7bf6f110b0msh404ef724c1e3f2fp186559jsn28f1c86e6a97',
        'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
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