const {server} = require('./app');
const {receiveStream, sendValues} = require('./web-socket');
const {Dispatcher} = require('./utilities/dispatcher');
const {auth} = require('./controllers/auth');

// add the controllers
const dispatcher = new Dispatcher();
dispatcher.use(auth());

// attaches the dispatcher to the stream of values
dispatcher.attach(receiveStream);

// start the server on port 8081
// TODO: add port to config
server.listen(8081);

// send command line notification
// TODO: make pretty/colored
console.log('listening on port 8081');

// send a test value to the client
setTimeout(() => {
    sendValues.next({data: 'the server says hello :)'});
}, 10000);
