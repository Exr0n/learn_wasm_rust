// import js from '/wasm/wasm_src.js';
// js.then(console.log);

const wasm = fetch('/wasm/wasm_src_bg.wasm')
    .then(res => res.arrayBuffer())
    .then(buf => WebAssembly.instantiate(buf))
    .then(obj => obj.instance.exports);

console.log(wasm);

// WebAssembly.compileStreaming(fetch('/wasm/wasm_src_bg.wasm'))
//     .then(mod => {
//         const imports = WebAssembly.Module.imports(mod);
//         console.log(imports[0]);
//     });

