const { User, Car } = require('../../db');


const fetchAllUsers = async () => {
  const users = await User.findAll({ include: Car });
  return users;
};

module.exports = { fetchAllUsers };
