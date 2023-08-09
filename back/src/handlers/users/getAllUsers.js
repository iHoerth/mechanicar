const { fetchAllUsers } = require('../../controllers/users/fetchAllUsers');

const getAllUsers = async (req, res) => {
  try {
    const results = await fetchAllUsers();
    res.status(200).json({
      status: 'Success',
      payload: results,
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = getAllUsers;
