'use strict';

module.exports = {

    context: {
        firstList: {
            classList: 'FooterLinks',
            items: '@list.items',
        },
        secondList: {
            classList: 'FooterLinks',
            items: [{
                url: '#',
                text: 'Home'
            },{
                url: '#',
                text: 'Speakers'
            },{
                url: '#',
                text: 'Schedule'
            },{
                url: '#',
                text: 'Venue'
            },{
                url: '#',
                text: 'Tickets'
            }]
        }
    }

};
