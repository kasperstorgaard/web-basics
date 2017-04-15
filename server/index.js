const http = require('http');
const app = require('./app');
const websockets = require('./websockets');

const server = http.createServer(app);
websockets.start(server);

server.listen(8081);

console.log('listening on port 8081');