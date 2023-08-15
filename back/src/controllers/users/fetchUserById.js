const { User, Car } = require('../../db');

const fetchUserById = async (id) => {
  const user = await User.findByPk(id, {
    include: Car,
  });
  return user;
};

module.exports = { fetchUserById };
