const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Font extends Model {}

Font.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        font: {
            type: DataTypes.STRING,
            allowNull: false,
            iunique: true
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'fonts'
    }
)

module.exports = Font;