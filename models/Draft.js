const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Draft extends Model {}

Draft.init(
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
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'draft'
    }
)

module.exports = Draft;