import { Config } from '@stencil/core';
import { stylus } from '@stencil/stylus';
import { postcss } from '@stencil/postcss';
import cssnext from 'postcss-preset-env';

export const config: Config = {
  namespace: 'nb-h5-base',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  plugins: [
    stylus({
      injectGlobalPaths: ['src/global/functions.styl']
    }),
    postcss({
      plugins: [cssnext()]
    })
  ],
  nodeResolve: {
    // 支持外部 npm 引入库
    browser: true,
    preferBuiltins: true
  }
};
