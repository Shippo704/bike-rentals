const { User } = require('../models');

const userData = [
    
    {
        name: 'name', 
        email: 'email1@gmail.com', 
        password:'password',
        phone: 'phone',
        creditCard:'Credit card number',
        cvc: '123',
    },

    {
        name: 'name', 
        email: 'email2@gmail.com', 
        password:'password',
        phone: 'phone',
        creditCard:'Credit card number',
        cvc: '111',
    },

    // {
    //     name: 'name', 
    //     email: 'email3@gmail.com', 
    //     password:'password',
    //     phone: 'phone',
    //     creditCard:'Credit card number',
    //     cvc: '939',
    // },

    // {
    //     name: 'name', 
    //     email: 'email4@gmail.com', 
    //     password:'password',
    //     phone: 'phone',
    //     creditCard:'Credit card number',
    //     cvc: '898',
    // },

    // {
    //     name: 'name', 
    //     email: 'email5@gmail.com', 
    //     password:'password',
    //     phone: 'phone',
    //     creditCard:'Credit card number',
    //     cvc: '879',
    // },

    // {
    //     name: 'name', 
    //     email: 'email6@gmail.com', 
    //     password:'password',
    //     phone: 'phone',
    //     creditCard:'Credit card number',
    //     cvc: '456',
    // },
  ];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;