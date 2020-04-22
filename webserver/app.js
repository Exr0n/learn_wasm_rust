'use strict';
const express = require('express');
const app = express();

const WHYMIMETYPEWRONG = `
// import * as wasm from './wasm_src_bg.wasm';
console.log("mimetypewrong loaded!!");

export function greet () {};

/*
import * as wasm from '/wasm/app.wasm';

const lTextDecoder = typeof TextDecoder === 'undefined' ? require('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}
export function greet() {
    wasm.greet();
}

export const __wbg_alert_cd4bf96773c29019 = function(arg0, arg1) {
    alert(getStringFromWasm0(arg0, arg1));
};

*/
`

const config = {
    port: 3000,
    path: __dirname
};

app.use((req, res, next) => {
    console.log(req.url);
    req.next();
});

app.get('/', (_, res) => {
    res.sendFile(config.path + '/resources/index.html');
});

app.get('/index.js', (_, res) => {
    res.sendFile(config.path + '/resources/index.js');
});

app.get('/wasm.js', (_, res) => {
    res.type('application/javascript');
    res.write(WHYMIMETYPEWRONG);
    res.end();
    // res.sendFile(config.path + '/resources/wasm.js');
});

// app.use('/wasm', express.static(__dirname + '/wasm'));

app.listen(config.port, () => console.log(`Listening on ${config.port} at ${Date()}`));

