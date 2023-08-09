// axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
const { User } = require('../../db');

const fetchUserById = async (id) => {
  console.log('CULO');
  try {
    const user = await User.findByPk(id);
    console.log(user);
    return user;
  } catch (e) {
    console.error('Error fetching user', error);
    throw error;
  }
};

module.exports = { fetchUserById };
