const express = require('express');
const routes = require('./routes');
require('dotenv').config();
// import sequelize connection
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'ecommerce_db',
    process.env.DB_USER,
    process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: process.env.DB_PORT
    }
);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT, async () => {
    try {
      await sequelize.sync();
      console.log("All models were seeded successfully.");
      console.log(`App listening on port ${PORT}!`);
    } catch (err) {
      console.log(err);
    }
  });