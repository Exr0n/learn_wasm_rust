// https://github.com/mdn/webassembly-examples/issues/5
var importObject = {
  imports: { imported_func: arg => console.log(arg) }
};

WebAssembly.instantiateStreaming(fetch('/node_modules/@exr0n/wasm/wasm_bg.wasm'), importObject)
.then(obj => console.log);

// import wasm from "/node_modules/@exr0n/wasm/wasm.js";

// console.log(js);
// js.then(js => {
//     js.greet("WebAssembly");
// });
