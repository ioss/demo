'use strict';

const rp = require('request-promise');

const request = rp({
    uri: 'http://uifaces.com/api/v1/random',
    json: true
});

module.exports = {

    context: {
        avatarPics: request.then(result => result.image_urls)
    }

};
