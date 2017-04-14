const path = require('path');
const express = require('express');

/**
 * Starts an express instance that serves the index.html file.
 */
function start() {
    const app = express();

    const distPath = path.join(__dirname, '../dist');
    const indexPath = path.join(distPath, 'index.html');

    app.use('/dist', express.static(distPath));
    app.get('/', (request, response) => response.sendFile(indexPath));

    return app;
}

module.exports = start;
