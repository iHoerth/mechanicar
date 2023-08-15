# mechanicar



## ENDPOINTS

- /users

- /cars

- /appointments



## 

User.findAll () ----> devuelve TODOS
User.findByPK(pk) ----> devuelve el user con el id dado
 User.findOne({where: {atributoDado: valorDado}})   ----> devuelve todos los que el atributoDado coinciden con el valorDado
 ej   User.find({where :{name: 'nahuel'}})
User.create(atributos) ----> crea un usuario nuevo con los atributos dados

User.modify();
User.delete();
