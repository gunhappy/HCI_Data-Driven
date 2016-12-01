module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue',
        options: vueConfig
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url',
        options: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  }
