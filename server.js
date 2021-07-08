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

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () =>
        console.log(` App listening on port ${PORT}! `));
});
module.exports = sequelize;