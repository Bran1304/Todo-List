const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    './src/index',
  ],
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/public/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: [
            // 'transform-decorators-legacy',
            '@babel/plugin-proposal-object-rest-spread',
            '@babel/plugin-proposal-class-properties',
          ],
        },
      },
      // {
      //   test: require.resolve('wavesurfer.js'),
      //   loader: 'expose-loader?WaveSurfer',
      // },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      }, {
        test: /\.(png|jpg|woff|woff2|eot|ttf|svg|gif)$/,
        loader: 'url-loader',
      }],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      WaveSurfer: 'wavesurfer.js',
    }),
  ],
}
