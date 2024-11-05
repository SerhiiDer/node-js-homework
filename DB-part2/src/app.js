const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const studentRoutes = require('./routes/studentRoutes');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/students', studentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
