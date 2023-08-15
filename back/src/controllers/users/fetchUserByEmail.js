// axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
const { User, Car } = require('../../db');

const fetchUserByEmail = async (email) => {
  const user = await User.findOne({
    where: { email: email },
    include: Car,
  });
  console.log(user);
  return user;
};

module.exports = { fetchUserByEmail };
