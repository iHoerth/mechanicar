// importar app.js y levantar el server, NADA MAS.
const app = require('./src/app');
const { conn } = require('./src/db');
const PORT = 3001;

app.listen(PORT, () => {
  conn.sync({ force: false });
  console.log(`SERVER LISTENING ON PORT ${PORT}`);
});
