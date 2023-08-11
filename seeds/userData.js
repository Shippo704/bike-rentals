const { User } = require('../models');

const userData = [
    
    {
        name: 'name', 
        email: 'email', 
        password:'password',
        phone: 'phone',
        creditCard:'Credit card number',
        cvc: 'cvc code',
    },

    {
        name: 'name', 
        email: 'email', 
        password:'password',
        phone: 'phone',
        creditCard:'Credit card number',
        cvc: 'cvc code',
    },

    {
        name: 'name', 
        email: 'email', 
        password:'password',
        phone: 'phone',
        creditCard:'Credit card number',
        cvc: 'cvc code',
    },

    {
        name: 'name', 
        email: 'email', 
        password:'password',
        phone: 'phone',
        creditCard:'Credit card number',
        cvc: 'cvc code',
    },

    {
        name: 'name', 
        email: 'email', 
        password:'password',
        phone: 'phone',
        creditCard:'Credit card number',
        cvc: 'cvc code',
    },

    {
        name: 'name', 
        email: 'email', 
        password:'password',
        phone: 'phone',
        creditCard:'Credit card number',
        cvc: 'cvc code',
    },
  ];

const seedUser = () => User.bulkCreate(UserData);

module.exports = seedUser;