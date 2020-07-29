require("dotenv").config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.PASSWORD, {
    host: "localhost",
    dialect: "mysql",
    timezone: '+05:30'
});

let db = sequelize;

module.exports = db;