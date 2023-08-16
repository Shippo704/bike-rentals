const { Location } = require('../models');

const locationData = [
    
    {
        address: 'Parliament Hill, 97 Wellington St, Ottawa', 
        hours: '8:00-22:00',  
    },

    {
        address: 'Rideau Center on 51 Rideau Street', 
        hours: '8:00-22:00',  
    },

    // {
    //     address: 'World Exchange Plaza, 47 O-Connor St', 
    //     hours: '8:00-22:00',  
    // },

    // {
    //     address: 'ByWrd Market, 44 Goerges Street', 
    //     hours: '8:00-22:00',  
    // },

    // {
    //     address: 'China Town, 745 Sommerset', 
    //     hours: '8:00-22:00',  
    // },

    // {
    //     address: 'Litle Italy, 200 Preston', 
    //     hours: '8:00-22:00',  
    // },
    
  ];

  
  const seedLocation = async () => {
 
     Location.bulkCreate(locationData);
    
}
  module.exports = seedLocation;