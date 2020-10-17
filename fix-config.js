// monkey patch the base webpack config to support WebAssembly

const fs = require('fs-extra');
const path = require('path');

const p = path.resolve(__dirname, './node_modules/@jupyterlab/builder/lib/webpack.config.base.js');
const base = require(p);

if (!base.experiments) {
  const experiments = `
module.exports = Object.assign(module.exports, {
  experiments: {
      topLevelAwait: true,
      asyncWebAssembly: true,
  }
});
  `;
  fs.appendFileSync(p, experiments);
}
