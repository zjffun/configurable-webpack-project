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
  }
};
