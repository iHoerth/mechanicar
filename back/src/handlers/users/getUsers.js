const { fetchAllUsers } = require('../../controllers/users/fetchAllUsers');
const { fetchUserByEmail } = require('../../controllers/users/fetchUserByEmail');

const getUsers = async (req, res) => {
  const { email } = req.query;
  try {
    const users = email ? await fetchUserByEmail(email) : await fetchAllUsers();
    res.status(200).json({
      status: 'Success',
      payload: users,
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = { getUsers };
