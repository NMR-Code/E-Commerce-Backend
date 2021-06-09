const express = require('express');
const routes = require('./routes');
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, async() => {
    try {
        console.log(`App listening on port ${PORT}!`);
    } catch (err) {
        console.log(err);
    }
});