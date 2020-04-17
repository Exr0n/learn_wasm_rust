// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/compileStreaming
WebAssembly.compileStreaming(fetch('/node_modules/@exr0n/wasm/wasm_bg.wasm'))
.then(function(mod) {
  var imports = WebAssembly.Module.imports(mod);
  console.log(imports[0]);
});
