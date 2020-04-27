const js = import("./node_modules/@exr0n/hello-wasm/hello_wasm.js");
js.then(js => {
  js.greet("WebAssembly");
});

