const http = require('http');
const path = require('path');
const express = require('express');

const public = path.join(__dirname, '../../public');
const index = path.join(public, 'index.html');

let server;

function start() {
    if (!server) {
        const app = express();

        app.use('/public', express.static(public));
        app.get('*', (request, response) => response.sendFile(index));

        server = http.createServer(app);
    }
    return server;
}

module.exports = {start};