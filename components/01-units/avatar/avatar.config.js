'use strict';

const rp = require('request-promise');

module.exports = function(){

    // Use the https://randomuser.me API to grab some fake user details
    // and then grab the image URLs from it

    const images = rp({
        uri: 'https://randomuser.me/api/',
        json: true
    })
    .then(res => res.results[0].picture)
    .catch(e => {
        return {
            'thumbnail': 'https://placekitten.com/g/80/80'
        }
    });

    return {

        context: {
            avatarPics: images
        }

    };


};
