'use strict';

module.exports = {

    collated: true,
    collator: (markup, item) => `<!-- Start: @${item.handle} -->\n<div class="collated-item">\n${markup}</div>\n<!-- End: @${item.handle} -->\n`,
    context: {
        type: 'default',
        text: "Click here"
    },
    variants: [
        {
            name: 'primary-action',
            context: {
                type: 'primary',
                text: "Do this thing"
            }
        },
        {
            name: 'secondary-action',
            context: {
                type: 'secondary',
                text: "You can also do this"
            }
        }
    ]

};
