const {OPEN} = require('ws');
const {Subject, Observable} = require('rxjs');

const {webSocketServer} = require('./web-socket-server');

const sendValues = new Subject();

function addClients(value) {
    return Observable.from(webSocketServer.clients)
        .filter(client => client.readyState === OPEN)
        .filter(client => !value.client || value.client === client)
}

function mapValues(value, client) {
    const message = JSON.stringify(value.data);
    return {client, message};
}

const sendStream = sendValues.mergeMap(addClients, mapValues);

// send the values to the clients
// TODO: add socket OPEN/CLOSED handling
sendStream.subscribe(({client, message}) => client.send(message));

module.exports = {sendValues, sendStream};