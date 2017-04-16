const {Observable} = require('rxjs');

const {connectionStream} = require('./connection-stream');
const {parseMessage} = require('./helpers');

function getMessageStream(socket) {
    return Observable
        .fromEvent(socket, 'message')
        .takeUntil(Observable.fromEvent(socket, 'close'));
}

function mapSocketData(socket, message) {
    const data = parseMessage(message.data);
    return {socket, data};
}

const receiveStream = connectionStream.mergeMap(getMessageStream, mapSocketData);

module.exports = {receiveStream};