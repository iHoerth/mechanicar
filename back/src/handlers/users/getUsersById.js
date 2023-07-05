const axios = require('axios');

const getUsersById = async (req, res) => {
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
};

module.exports = getUsersById;
