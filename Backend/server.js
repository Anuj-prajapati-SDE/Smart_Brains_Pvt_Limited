require('dotenv').config();
const app = require('./src/app');
const connetDB = require('./src/db/db')
const PORT = process.env.PORT || 5000;

connetDB();

app.listen(3000, () => {
  console.log(`Server is running on port ${3000}`);
});



