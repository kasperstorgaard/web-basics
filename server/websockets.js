const WebSocket = require('ws');

const Dispatcher = require('./dispatcher');
const login = require('./controllers/login');

function parseMessage(message) {
    try {
        return JSON.parse(message);
    } catch(error) {
        throw new Error("unable to parse provided message.");
    }
}

const dispatcher = new Dispatcher();
dispatcher.use(login());

function start (server) {
    const wss = new WebSocket.Server({server});

    wss.on('connection', (ws) => {
        ws.on('message', (message) => {
            try {
                const data = parseMessage(message);
                const {action} = data;

                dispatcher.dispatch(action, data);
            } catch(error) {
                const errorMessage = JSON.stringify({error});
                wss.send(errorMessage);
            }
        });
    });

    return wss;
}

module.exports = {start};