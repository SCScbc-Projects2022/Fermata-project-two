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
        style_tag: {
            type: DataTypes.STRING,
            allowNull: false,
            iunique: true
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'font'
    }
)

module.exports = Font;