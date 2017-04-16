const {server} = require('./app');
const {receiveStream} = require('./web-socket');

receiveStream.subscribe(({data}) => console.log(data));

// start the server on port 8081
server.listen(8081);

console.log('listening on port 8081');