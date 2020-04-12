'use strict';
const app = require('express')();

const config = {
    port: 3000
};

app.get('/', (_, res) => {
    res.status(200).end("Hello world!");
});

app.listen(config.port, () => console.log(`Listening on ${config.port} at ${Date()}`));

