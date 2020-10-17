import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyterlab-wasm-example extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-wasm-example',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab-wasm-example is activated!');
  }
};

export default extension;
