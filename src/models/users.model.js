const { Sequelize, DataTypes } = require('sequelize');
const db = require("../database/db");

const User = db.define('user', { 
    user_id: {  
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false, 
        primaryKey:true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    },
    mobile_number: {
        type: DataTypes.BIGINT(11),
        allowNull: false
    },
});

User.sync();

module.exports = User;