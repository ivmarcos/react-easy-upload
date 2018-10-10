const path = require('path');
const fs = require('fs');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const srcFolder = path.join(__dirname, 'src');


module.exports = {
  serverHost: 'localhost',
  serverPort: 6061,
  styleguideDir: 'public',
  title: 'React Easy Upload',
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/Wrapper')
  },
  components: 'src/**/*.jsx',
  webpackConfig: {
    devtool: 'sourcemap',
    module: {
      rules: [
        // Babel loader, will use your project’s .babelrc
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        // Other loaders that are needed for your components
        {
          test: /\.s?css$/,
          loaders: ['style-loader', 'css-loader?importLoaders=1', 'sass-loader?precision=10']
        },
        {
          test: /\.svg$/,
          loader: 'url-loader?limit=65000&mimetype=image/svg+xml&name=public/fonts/[name].[ext]'
        },
        {
          test: /\.(png|jpg|gif)$/,
          loader: 'url-loader?limit=65000&name=public/static/[name].[ext]'
        },
        {
          test: /\.woff$/,
          loader:
            'url-loader?limit=65000&mimetype=application/font-woff&name=public/fonts/[name].[ext]'
        },
        {
          test: /\.woff2$/,
          loader:
            'url-loader?limit=65000&mimetype=application/font-woff2&name=public/fonts/[name].[ext]'
        },
        {
          test: /\.[ot]tf$/,
          loader:
            'url-loader?limit=65000&mimetype=application/octet-stream&name=public/fonts/[name].[ext]'
        },
        {
          test: /\.eot$/,
          loader:
            'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=public/fonts/[name].[ext]'
        }
      ]
    },
    plugins: [new OpenBrowserPlugin({ url: 'http://localhost:6061' })]
  }
};
