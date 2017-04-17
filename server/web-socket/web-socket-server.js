const WebSocket = require('ws');

const {server} = require('../app');

const webSocketServer = new WebSocket.Server({server});
module.exports = {webSocketServer};
