const express = require('express');
const usersRouter = express.Router();

const getUserById = require('../handlers/users/getUserById');
const getAllUsers = require('../handlers/users/getAllUsers');
const getUserByEmail = require('../handlers/users/getUserByEmail');
// const postUser = require('../handlers/users/postUser');


usersRouter.get('/', getUserByEmail)
usersRouter.get('/', getAllUsers);
usersRouter.get('/:id', getUserById);

// usersRouter.post('/', postUser)

module.exports = usersRouter;
