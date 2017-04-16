const {Subject} = require('rxjs');

const {connectionStream} = require('./connection-stream');

const sendStream = new Subject();

module.exports = {sendStream};