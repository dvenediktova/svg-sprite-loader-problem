// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
  lintOnSave: true,

  chainWebpack: config => {
    config
      .plugin('sprite-loader')
      .use(SpriteLoaderPlugin)
      .end();

    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();

    svgRule
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'svg-[name]',
      });

    svgRule
      .use('svgo-loader')
      .loader('svgo-loader')
      .options({
        plugins: [
          { cleanupAttrs: true },
          { removeTitle: true },
          { removeDesc: true },
          { convertColors: { shorthex: false } },
          { convertPathData: false },
        ],
      });
  },
};
