const path = require('path');

module.exports = {
  entry: './client/components/Index.jsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public'),
    jsonpFunction: 'jsonpApp1Navbar',
  },
  module: {
    rules: [
      {
        test: /\.m?jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            // plugins: ["syntax-class-properties", "transform-class-properties"]
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
};
