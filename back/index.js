// importar app.js y levantar el server, NADA MAS.
const app = require('./src/app');

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`SERVER LISTENING ON PORT ${PORT}`);
});
