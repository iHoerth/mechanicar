const express = require('express');
const axios = require('axios');
const usersRouter = express.Router();

// en este archivo, estariamos parados en 'localhost:3000/users'
// GET getAllUsers

usersRouter.get('/', async (req, res) => {
  const { id } = req.query;
  try {
    let results;
    if (id) {
      results = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    } else {
      results = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    }
    const users = results.data;
    console.log(users);
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET getUserById     'localhost:3000/users/4
usersRouter.get('/:id', async (req, res) => {
  // req = {body:{}, params:{}, query:{}
  const { id } = req.params;
  try {
    const results = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = results.data;
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
});

// POST
// usersRouter.post();

// PUT
// usersRouter.put()

// DELETE
// usersRouter.delete();

module.exports = usersRouter;
