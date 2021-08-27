import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the @alalalalaki/jupyter-white-theme extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: '@alalalalaki/jupyter-white-theme',
  requires: [IThemeManager],
  autoStart: true,
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension @alalalalaki/jupyter-white-theme is activated!');
    const style = '@alalalalaki/jupyter-white-theme/index.css';

    manager.register({
      name: '@alalalalaki/jupyter-white-theme',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default extension;
