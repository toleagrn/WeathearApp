const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
    cities: './src/cities.js',
    settings: "./src/settings.js" 
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Cleans the dist folder on every build
  },
  devServer: {
    static: './dist',
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      chunks: ['main'] // Your main weather app JS
    }),
    new HtmlWebpackPlugin({
      filename: 'cities.html', 
      template: './src/cities.html', 
      chunks: ["cities"]
    }),
    new HtmlWebpackPlugin({
      filename: 'settings.html', 
      template: './src/settings.html', 
      chunks: ["settings"]
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'], // Handles your CSS imports
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource', // Handles your images automatically
      },
    ],
  },
};