const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
   mode: "development",   
   entry: {
			main: "./src/index.js",
         DOMHandler: "./src/DOMHandler.js",
	 },
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename : "[name].bundle.js"
   },
	 plugins: [ 
      new HtmlWebpackPlugin({ 
         template: './src/index.html'
      }), 
      new BrowserSyncPlugin(
        // BrowserSync options
        {
          // browse to http://localhost:3000/ during development
          host: 'localhost',
          port: 3000,
          // proxy the Webpack Dev Server endpoint
          // (which should be serving on http://localhost:3100/)
          // through BrowserSync
          proxy: 'http://localhost:8080/',
          files: ['./dist/*.html','./dist/*.css']
        },
        // plugin options
        {
          // prevent BrowserSync from reloading the page
          // and let Webpack Dev Server take care of this
          reload: true
        }
      ),
      // new MiniCssExtractPlugin()
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
               "style-loader", // Injects style into DOM
               "css-loader",   // Turns CSS into JS
               "sass-loader"   // Turns SCSS into CSS
            ]
        },
        {
           test: /\.(png|svg|jpg|jpeg|gif)$/i,
           type: 'asset/resource',
        },
        {
         test: /\.(woff|woff2|eot|ttf|svg|jpg|png)$/,
         use: {
           loader: 'url-loader',
         },
        },
      ]
   }
};