'use strict';

const faker = require('faker');

module.exports = function(){

    return {

        context: {
            user: {
                name: {
                    first: faker.name.firstName(),
                    last: faker.name.lastName(),
                },
                jobTitle: faker.name.jobTitle(),
                companyName:  faker.company.companyName(),
                picture: {
                    large: 'http://placekitten.com/g/480/480'
                }
            }
        }

    };


};


// const rp    = require('request-promise');
// const faker = require('faker');
//
// module.exports = function(){
//
//     // Use the https://randomuser.me API to grab some fake user details
//     // and then grab the image URLs from it
//
//     const userData = rp({
//         uri: 'https://randomuser.me/api/',
//         json: true
//     })
//     .then(res => res.results[0])
//     .then(user => {
//         user.jobTitle = faker.
//     })
//     .catch(e => ({}));
//
//     return {
//
//         context: {
//             user: userData
//         }
//
//     };
//
//
// };
