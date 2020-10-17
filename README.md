# jupyterlab-wasm-example

![Github Actions Status](https://github.com/jtpio/jupyterlab-wasm-example/workflows/Build/badge.svg)

Example of a JupyterLab Extension written in Rust and compiled to WebAssembly

![demo](https://user-images.githubusercontent.com/591645/96355103-4f0d7c00-10de-11eb-893e-cf1c4739c3b2.gif)

## Usage

This repository is meant to be used as an example for extending JupyterLab with WebAssembly modules.

This example uses:

- [Rust](https://rust-lang.org) as the programming language, to implement most of the code for the extension
- [wasm-pack](https://github.com/rustwasm/wasm-pack): build Rust-generated WebAssembly packages and use them from JavaScript
- [JupyterLab](https://github.com/jupyterlab/jupyterlab) build system, to package everything as an extension that can be installed with `pip`

## Requirements

* JupyterLab >= 3.0

## Contributing

### Development install

Note: You will need NodeJS to build the extension package.

The `jlpm` command is JupyterLab's pinned version of
[yarn](https://yarnpkg.com/) that is installed with JupyterLab. You may use
`yarn` or `npm` in lieu of `jlpm` below.

```bash
# Clone the repo to your local environment
# Change directory to the jupyterlab-wasm-example directory

# create a new environment
conda create -n jupyterlab-wasm-example -c conda-forge/label/jupyterlab_rc -c conda-forge/label/jupyterlab_server_rc -c conda-forge jupyterlab=3 nodejs python cookiecutter -y
conda activate jupyterlab-wasm-example

# compile the Rust package to WebAssembly:
jlpm run build:rust

# Install package in development mode
pip install -e .

# Link your development version of the extension with JupyterLab
jupyter labextension develop . --overwrite

# Rebuild extension Typescript source after making changes
jlpm run build
```

You can watch the source directory and run JupyterLab at the same time in different terminals to watch for changes in the extension's source and automatically rebuild the extension.

```bash
# Watch the source directory in one terminal, automatically rebuilding when needed
jlpm run watch
# Run JupyterLab in another terminal
jupyter lab
```

With the watch command running, every saved change will immediately be built locally and available in your running JupyterLab. Refresh JupyterLab to load the change in your browser (you may need to wait several seconds for the extension to be rebuilt).
