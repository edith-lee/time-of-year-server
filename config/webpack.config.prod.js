const { merge } = require("webpack-merge");
const baseWebpackConfig = require("./webpack.config.base");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const webpackConfig = merge(baseWebpackConfig, {
  mode: "production",
  stats: { children: false, warnings: false },
  optimization: {
    minimizer: [
      // TerserWebpackPlugin 混淆代码
      new TerserWebpackPlugin({
        terserOptions: {
          warnings: false,
          compress: {
            warnings: false,
            // 注释console
            drop_console: true,
            dead_code: true,
            drop_debugger: true,
          },
          output: {
            comments: false,
            beautify: false,
          },
          mangle: true,
        },
        parallel: true,
      }),
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          name: "commons",
          chunks: "initial",
          minChunks: 3,
        },
      },
    },
  },
});

module.exports = webpackConfig;
