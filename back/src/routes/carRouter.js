const express = require('express');
const getAllCars = require('../handlers/cars/getAllCars');
const getCartByid = require('../handlers/cars/getCarById');
const getCarByPlate = require('../handlers/cars/getCarByPlate');
const carRouter = express.Router();



/* carRouter.get('/', getCarByPlate) */

carRouter.get('/', getAllCars);

carRouter.get('/:id', getCartByid);



module.exports = carRouter;
