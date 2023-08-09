// axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
const { User } = require('../../db');

const fetchUserById = async (id) => {
  const user = await User.findByPk(id);
  console.log(user);
  return user;
};

module.exports = { fetchUserById };
