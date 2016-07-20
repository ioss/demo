'use strict';

module.exports = {

    collated: true,
    collator: (markup, item) => `<!-- Start: @${item.handle} -->\n<div class="collated-item">\n${markup}</div>\n<!-- End: @${item.handle} -->\n`,
    context: {
        type: 'default',
        text: "Standard button"
    },
    variants: [
        {
            name: 'primary-action',
            context: {
                type: 'primary',
                text: "Primary action button &rarr;"
            }
        },
        {
            name: 'secondary-action',
            context: {
                type: 'secondary',
                text: "Secondary action button"
            }
        }
    ]

};
