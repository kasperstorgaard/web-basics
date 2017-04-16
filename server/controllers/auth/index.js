const WebSocket = require('ws');

const websocket = require('../../websocket');

function auth(data) {
    const wss = websocket.start();
    const message = JSON.stringify({type: 'AUTH', data: true});

    const clients = Array.from(wss.clients);

    clients
        .filter(client => client.readyState === WebSocket.OPEN)
        .forEach(client => client.send(message));
}

function handlers() {
    return {
        'AUTH': auth
    };
}

module.exports = handlers;