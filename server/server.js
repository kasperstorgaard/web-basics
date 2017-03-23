const express = require('express');

function setup() {
    const app = express();

    app.get('/', (request, response) => response.send('Hello World!'));

    return app;
}

module.exports = setup;
