const express = require('express');
const usersRouter = express.Router();

const getUserById = require('../handlers/users/getUsersById');
const getAllUsers = require('../handlers/users/getAllUsers');

usersRouter.get('/', getAllUsers);
usersRouter.get('/:id', getUserById);

module.exports = usersRouter;
