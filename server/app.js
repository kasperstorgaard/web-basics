const path = require('path');
const express = require('express');

const distPath = path.join(__dirname, '../dist');
const index = path.join(distPath, 'index.html');

const app = express();

app.use('/dist', express.static(distPath));
app.get('*', (request, response) => response.sendFile(index));

module.exports = app;
