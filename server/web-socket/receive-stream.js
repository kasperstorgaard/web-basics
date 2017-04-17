const {Observable} = require('rxjs');
const uuid = require('uuid/v4')

const {parseMessage} = require('./helpers');
const {webSocketServer} = require('./web-socket-server');

const clientStream = Observable
    .fromEvent(webSocketServer, 'connection')
    .map(client => ({id: uuid(), client}));

function getMessageStream({client}) {
    return Observable
        .fromEvent(client, 'message')
        .takeUntil(Observable.fromEvent(client, 'close'));
}

function mapSocketData({id}, message) {
    const {action, data} = parseMessage(message.data);
    return {id, action, data};
}

const receiveStream = clientStream.mergeMap(getMessageStream, mapSocketData);

module.exports = {receiveStream};