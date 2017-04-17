const {sendValues} = require('../../web-socket');

function auth() {
    sendValues.next({data: 'auth completed'});
}

function handlers() {
    return {
        'AUTH': auth
    };
}

module.exports = {auth: handlers}