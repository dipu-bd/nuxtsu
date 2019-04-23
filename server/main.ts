import chalk from 'chalk'
import express from 'express'
import { Nuxt, Builder } from 'nuxt'

import config from '../nuxt.config'

// Import and Set Nuxt.js options
config.dev = !(process.env.NODE_ENV === 'production')

// Configure server
const app = express()

// Init Nuxt.js
const nuxt = new Nuxt(config)
nuxt.error = err => {
  console.log(chalk.dim(err.stack))
}

// Give nuxt middleware to express
app.use(nuxt.render)

// Get configs
const host: string = process.env.HOST || '0.0.0.0'
const port: number = Number(process.env.PORT) || 3000

// Listen the http server
app.listen(port, host, err => {
  if (err) {
    return console.log(chalk.dim(err.stack))
  }
  console.log(
    '\n',
    chalk.bgGreen('SERVER RUNNING'),
    chalk.blueBright('@'),
    chalk.underline(`http://${host}:${port}`),
    '\n',
  )
})

// Build only in dev mode
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}
