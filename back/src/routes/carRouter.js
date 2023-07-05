const express = require("express")
const getAllCars = require("../handlers/cars/getAllCars")
const carRouter = express.Router()


carRouter.get("/", getAllCars)


carRouter.get("/")








module.exports = carRouter