const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const cryptr = require('cryptr');
const sequelize = require('../config/connection');

class User extends Model {
// add validateEmail function
// add checkPassword function
// add encrypt/decrypt functions for creditCard and cvc
}

User.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        creditCard: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cvc: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        // FOREIGN KEY
        location: {
            type: DataTypes.INTEGER,
            references: {
                model: 'location',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
      }
)