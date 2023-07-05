const axios = require('axios');

const getAllUsers = async (req, res) => {
  const { id } = req.params;
  try {
    const results = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = results.data;
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = getAllUsers;
