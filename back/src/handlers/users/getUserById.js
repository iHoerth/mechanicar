const { fetchUserById } = require('../../controllers/users/fetchUserById');

const getUserById = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const parsedId = parseInt(id, 10);
  try {
    const user = await fetchUserById(parsedId);
    res.status(200).json({
      status: 'SUCCESS',
      payload: user,
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = { getUserById };
