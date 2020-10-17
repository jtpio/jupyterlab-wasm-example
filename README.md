# jupyterlab-wasm-example

Example of a JupyterLab Extension written in Rust and compiled to WebAssembly.

## Usage

This repository is meant to be used as an example for extending JupyterLab with WebAssembly modules.

This example uses:

- [Rust](https://rust-lang.org) as the programming language, to implement most of the code for the extension
- [wasm-pack](https://github.com/rustwasm/wasm-pack): build Rust-generated WebAssembly packages and use them from JavaScript
- [JupyterLab](https://github.com/jupyterlab/jupyterlab) build system, to package everything as an extension that can be installed with `pip`