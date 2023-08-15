const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const Cryptr = require('cryptr');
const cryptr = new Cryptr('secretWord');
const sequelize = require('../config/connection');

class User extends Model {
    checkPassword(password) {
        return bcrypt.compareSync(password, this.password);
    };
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
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
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
            type: DataTypes.STRING,
            allowNull: false
        },
        cvc: {
            type: DataTypes.STRING,
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
        hooks: {
            async beforeCreate(newUserData) {
              newUserData.password = await bcrypt.hash(newUserData.password, 10);
              newUserData.creditCard = await cryptr.encrypt(newUserData.creditCard, 10 );
              //newUserData.username = cryptr.decrypt(newUserData.username);
              return newUserData;
            },    
       
          },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
      }
);

module.exports = User;