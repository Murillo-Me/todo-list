const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
   mode: "development",   
   entry: {
			main: "./src/main.js",
         // DOMHandler: "./src/DOMHandler.js"
	 },
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename : "[name].bundle.js",
      // publicPath: "http://localhost:3000/"
   },
	 plugins: [ 
      new HtmlWebpackPlugin({ 
         template: './src/index.html'
      }), 
      new MiniCssExtractPlugin()
   ],
   module:{
      rules:[
        {
            test: /\.html$/i,
            loader: "html-loader",
        },
        {
            test: /\.(s(a|c)ss)$/,
            use: [
               MiniCssExtractPlugin.loader,
               // "style-loader", // Injects style into DOM
               "css-loader",   // Turns CSS into JS
               "sass-loader"   // Turns SCSS into CSS
            ]
        },
      //   {
      //      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      //      type: 'asset/resource',
      //   },
      //   {
      //    test: /\.(woff|woff2|eot|ttf|svg|jpg|png)$/,
      //    use: {
      //      loader: 'url-loader',
      //    },
      //   },
      ]
   }
};