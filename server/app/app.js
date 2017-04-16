const http = require('http');
const path = require('path');
const express = require('express');

const public = path.join(__dirname, '../../public');
const index = path.join(public, 'index.html');

const app = express();

app.use('/public', express.static(public));
app.get('*', (request, response) => response.sendFile(index));

const server = http.createServer(app);

module.exports = {server};