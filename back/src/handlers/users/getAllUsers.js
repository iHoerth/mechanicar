const { fetchAllUsers } = require('../../controllers/users/fetchAllUsers');

const getAllUsers = async (req, res) => {
  try {
    const users = await fetchAllUsers();
    res.status(200).json({
      status: 'Success',
      payload: users,
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = getAllUsers;
