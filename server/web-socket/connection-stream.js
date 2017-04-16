const WebSocket = require('ws');
const {Observable} = require('rxjs');

const {server} = require('../app');

const wss = new WebSocket.Server({server});
const connectionStream = Observable.fromEvent(wss, 'connection');

module.exports = {connectionStream};