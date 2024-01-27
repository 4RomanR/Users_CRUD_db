const { DataType, DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const User = sequelize.define('user',{
    firstName: {
        type: DataTypes.STRING(100),
        allowNull:false      
    },
    lastName: {
        type: DataTypes.STRING(100),
        allowNull:false      
    },
    email:{
        type: DataTypes.STRING(100),
        allowNull:false,
        unique:true
    },
    password:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    birthday:{
        type: DataTypes.DATEONLY,
    },
})
module.exports = User