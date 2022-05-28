const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');
const { Module } = require('module');

class User extends Model {
    validate(login) {
        return bcrypt.compareSync(login, this.password);
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
         type: DataTypes.STRING,
         allowNull: false,
         unique: true,
         validate: {
             isEmail: true
         }   
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [6]
                // add other types of validation?
            }
        }
    },
    {
        hooks: {
            async beforeCreate(newUser) {
                newUser.password = await bcrypt.hash(newUser.password, 5);
                return newUser;
            },
            async beforeUpdate(updateUser) {
                updateUser.password = await bcrypt.hash(updateUser.password, 5);
            }
        },
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
)

module.exports = User;