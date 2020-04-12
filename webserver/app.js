'use strict';
const app = require('express')();

const config = {
    port: 3000,
    path: __dirname
};

app.get('/', (_, res) => {
    res.sendFile(config.path + '/index.html');
});

app.get('/wasm_glue.js', (_, res) => {
    res.sendFile(config.path + '/wasm_glue.js');
});

app.listen(config.port, () => console.log(`Listening on ${config.port} at ${Date()}`));

