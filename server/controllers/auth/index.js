const WebSocket = require('ws');

function auth(data) {
    console.log('auth');
}

function handlers() {
    return {
        'AUTH': auth
    };
}

module.exports = handlers;