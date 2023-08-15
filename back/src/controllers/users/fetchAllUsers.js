const { User } = require('../../db');

// User.findAll () ----> devuelve TODOS
// User.findByPK(pk) ----> devuelve el user con el id dado
// User.findOne({where: {atributoDado: valorDado}})   ----> devuelve todos los que el atributoDado coinciden con el valorDado
// ej   User.find({where :{name: 'nahuel'}})
//User.create(atributos) ----> crea un usuario nuevo con los atributos dados

//User.modify();
//User.delete();

const fetchAllUsers = async () => {
  const users = await User.findAll();
  console.log(users)
  return users;
};

module.exports = { fetchAllUsers };
