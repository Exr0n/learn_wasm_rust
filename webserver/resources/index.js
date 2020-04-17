WebAssembly.compileStreaming(fetch('/wasm/app.wasm'))
    .then(mod => {
        const imports = WebAssembly.Module.imports(mod);
        console.log(imports[0]);
    });

