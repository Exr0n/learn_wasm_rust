const js = import("node_modules/@exr0n/wasm/wasm.js");
console.log(js);
js.then(js => {
    js.greet("WebAssembly");
});
