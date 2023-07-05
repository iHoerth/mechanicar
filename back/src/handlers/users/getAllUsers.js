const { fetchUsersFromDb } = require('../../controllers/users/fetchUsersFromDb');

const getAllUsers = async (req, res) => {
  try {
    const results = await fetchUsersFromDb();
    res.status(200).json(results);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = getAllUsers;
