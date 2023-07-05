const express = require('express');
const usersRouter = express.Router();

const getUserById = require('../handlers/users/getUsersById');
const getAllUsers = require('../handlers/users/getAllUsers');

usersRouter.get('/', getUserById);
usersRouter.get('/:id', getAllUsers);

module.exports = usersRouter;
