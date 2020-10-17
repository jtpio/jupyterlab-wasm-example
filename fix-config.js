// monkey patch the base config to support WebAssembly

const fs = require('fs-extra');
const p = './node_modules/@jupyterlab/builder/lib/webpack.config.base.js';
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
