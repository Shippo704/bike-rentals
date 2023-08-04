const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Vehicle extends Model {

}

Vehicle.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        vehicleType: {
            type: DataTypes.STRING,
            allowNull: false
        },
        make: {
            type: DataTypes.STRING
        },
        model: {
            type: DataTypes.STRING
        },
        colour: {
            type: DataTypes.STRING
        },
        isAvailable: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
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
        modelName: 'vehicle',
      }
);

module.exports = Vehicle;