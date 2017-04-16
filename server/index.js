const app = require('./app');
const websocket = require('./websocket');
const auth = require('./controllers/auth');

// create the server
const server = app.start();

// register websocket plugins
websocket.use(auth());

// start up the web socket connection.
const wss = websocket.start();

// start the server on port 8081
server.listen(8081);
console.log('listening on port 8081');