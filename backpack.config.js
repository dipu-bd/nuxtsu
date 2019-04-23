module.exports = {
  webpack: (config, options, webpack) => {
    config.entry.main = ['./server/main.ts']

    config.resolve = {
      extensions: ['.tsx', '.ts', '.js', '.json'],
    }

    config.module.rules.push({
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: [/node_modules/],
      // options: {
      //   configFile: './server/tsconfig.json',
      // },
    })

    return config
  },
}
