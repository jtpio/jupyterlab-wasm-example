import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { ICommandPalette } from '@jupyterlab/apputils';

const { add, open_canvas } = await import('../../rust-example/pkg');

namespace CommandIds {
  export const createCanvas = 'jupyterlab-wasm-example:createCanvas';
  export const clearCanvas = 'jupyterlab-wasm-example:clearCanvas';
}

/**
 * Initialization data for the jupyterlab-wasm-example extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-wasm-example',
  autoStart: true,
  optional: [ICommandPalette],
  activate: async (app: JupyterFrontEnd, palette: ICommandPalette) => {
    console.log('Calling add(2, 3) from Rust');
    const res = add(2, 3);
    console.log(res);
    console.log('JupyterLab extension jupyterlab-wasm-example is activated!');

    const { commands } = app;
    commands.addCommand(CommandIds.createCanvas, {
      label: 'Create the Rust Canvas',
      execute: () => {
        open_canvas();
      }
    });

    commands.addCommand(CommandIds.clearCanvas, {
      label: 'Clear the Rust Canvas',
      execute: () => {
        const canvas = document.getElementById('rust-canvas');
        canvas?.remove();
      }
    });

    if (palette) {
      [CommandIds.createCanvas, CommandIds.clearCanvas].forEach(command => {
      palette.addItem({ command, category: 'WebAssembly' });
      })
    }
  }
};

export default extension;
