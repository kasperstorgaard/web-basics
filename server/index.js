const {server} = require('./app');
const {receiveStream, sendValues} = require('./web-socket');

// log the received data to commandline for now
receiveStream.subscribe(({data}) => console.log(data));

// start the server on port 8081
server.listen(8081);

// send command line notification, TODO: make pretty/colored
console.log('listening on port 8081');

// send a test value to the client
sendValues.next({data: 'connected!'});