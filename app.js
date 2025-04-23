const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./backend/config/db');
const Task = require('./backend/models/Task');
const taskRoutes = require('./backend/routes/tasks');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/tasks', taskRoutes);

sequelize.sync().then(() => {
  console.log('DB sincronizado');
  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });
});
