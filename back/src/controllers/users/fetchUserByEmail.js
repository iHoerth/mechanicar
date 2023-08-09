// axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
const { User } = require('../../db');

const fetchUserByEmail = async (email) => {
  const user = await User.findOne({ where: { email: email } });
  console.log(user);
  return user;
};

module.exports = { fetchUserByEmail };
