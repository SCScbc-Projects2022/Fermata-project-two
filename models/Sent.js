const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Sent extends Model {}

Sent.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: false
        },
        // OPTIONAL
        sign_off: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        recipient_email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }   
        },
        letter_body: {
            type: DataTypes.STRING,
            allowNull: false
        },
        spotify_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        font_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'font',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'draft'
    }
)

module.exports = Sent;