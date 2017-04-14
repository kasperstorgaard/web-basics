const server = require('./server.js');
const app = server();

app.listen(8081);
console.log('listening on port 8081');