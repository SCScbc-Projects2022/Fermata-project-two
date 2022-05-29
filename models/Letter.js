const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Letter extends Model {}

Letter.init(
    {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            autoIncrement: false
        },
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
            allowNull: true,
            validate: {
                isEmail: true
            }   
        },
        letter_body: {
            type: DataTypes.STRING,
            allowNull: true
        },
        spotify_id: {
            type: DataTypes.STRING,
            allowNull: true
        },
        font_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'font',
                key: 'id'
            }
        },
        read_only: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'letter'
    }
)

module.exports = Letter;