const {Subject, Observable} = require('rxjs');

const {connectionStream} = require('./connection-stream');

const sendValues = new Subject();

function addConnections(value) {
    return connectionStream
        .filter(socket => !value.socket || socket === value.socket);
}

function mapValues(value, socket) {
    const message = JSON.stringify(value.data);
    return {socket, message};
}

const sendStream = sendValues.mergeMap(addConnections, mapValues);

// send the values to the clients
sendStream.subscribe(({socket, message}) => socket.send(message));

module.exports = {sendValues, sendStream};