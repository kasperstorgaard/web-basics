const path = require('path');
const express = require('express');

/**
 * Starts an express instance that serves the index.html file.
 */
function start() {
    const distPath = path.join(__dirname, '../dist');
    const index = path.join(distPath, 'index.html');

    const app = express();

    app.use('/dist', express.static(distPath));
    app.get('*', (request, response) => response.sendfile(index));

    return app;
}

module.exports = start;
