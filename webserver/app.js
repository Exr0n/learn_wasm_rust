'use strict';
const express = require('express');
const app = express();

const config = {
    port: 3000,
    path: __dirname
};

app.get('/', (_, res) => {
    res.sendFile(config.path + '/resources/index.html');
});

app.get('/index.js', (_, res) => {
    res.sendFile(config.path + '/resources/index.js');
});

app.use('/wasm', express.static(__dirname + '/wasm'));

app.listen(config.port, () => console.log(`Listening on ${config.port} at ${Date()}`));

