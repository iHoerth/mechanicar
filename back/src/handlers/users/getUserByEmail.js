const { fetchUserByEmail } = require('../../controllers/users/fetchUserByEmail');

const getAllUsers = async (req, res) => {
  const { email } = req.query;
  console.log(email);
  try {
    const user = await fetchUserByEmail(email);
    res.status(200).json({
      status: 'Success',
      payload: user,
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = getAllUsers;
