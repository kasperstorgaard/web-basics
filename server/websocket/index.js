const WebSocket = require('ws');

const app = require('../app');
const {Dispatcher} = require('./dispatcher');
const {parseMessage} = require('./helpers');

const dispatcher = new Dispatcher();

let wss;

function use(plugin) {
    if (wss) {
        throw new Error('must register all plugins before starting web socket server.');
    }
    dispatcher.use(plugin);
}

function start() {
    if (!wss) {
        const server = app.start();
        wss = new WebSocket.Server({server});

        wss.on('connection', (ws) => {
            ws.on('message', (message) => {
                try {
                    const data = parseMessage(message);
                    dispatcher.dispatch(data.action, data);
                } catch (error) {
                    const errorMessage = JSON.stringify({error: error.message});
                    ws.send(errorMessage);
                }
            });
        });
    }

    return wss;
}

module.exports = {use, start};