module.exports = [
  {
    test: /\.global\.scss$/, // only files with .global will go through this loader. e.g. app.global.css
    loaders: [
      'style-loader',
      'css-loader?sourceMap&importLoaders=1',
      'postcss-loader'
    ]
  },
  {
    test: /^((?!\.global).)*\.scss$/,
    exclude: /[\/\\](node_modules|bower_components|public\/)[\/\\]/,
    loaders: [
      'style?sourceMap',
      'css',
      'sass'
    ]
  },
  {
    test: /\.jsx?$/,
    exclude: /(node_modules|bower_components|public\/)/,
    loader: "babel"
  },
  {
    test: /\.(png|woff|woff2|eot|ttf|svg)$/,
    loader: 'url-loader?limit=100000'
  }
];
