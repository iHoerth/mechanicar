const express = require('express');
const usersRouter = express.Router();

const { getUserById } = require('../handlers/users/getUserById');
const { getUsers } = require('../handlers/users/getUsers');
// const postUser = require('../handlers/users/postUser');

usersRouter.get('/', getUsers);
usersRouter.get('/:id', getUserById);

// usersRouter.post('/', postUser)

module.exports = usersRouter;
