const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

require("./config");

// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      new CopyPlugin([{ from: "config.js" }]),
      new HtmlWebpackPlugin({
        title: CWP_CONFIG.title,
        // Load a custom template (lodash by default)
        template: "index.html"
      })
    ]
  },
  chainWebpack: config => {
    const imagesRule = config.module.rule("images");

    // clear all existing loaders.
    // if you don't do this, the loader below will be appended to
    // existing loaders of the rule.
    imagesRule.uses.clear();

    imagesRule
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: "[path][name].[ext]"
      });
  }
};
