import chalk from 'chalk'
import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import { Nuxt, Builder } from 'nuxt'

// Configure Nuxt client
import config from '../nuxt.config'
config.dev = !(process.env.NODE_ENV === 'production')

const nuxt = new Nuxt(config)
nuxt.error = (err) => {
  console.log(chalk.dim(err.stack))
}

// Build Nuxt in dev mode
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

// Configure Express server
const app: express.Express = express()

app.use(compression())
app.use(bodyParser.json())
app.use(cookieParser(process.env.COOKIE_SECRET))

app.use(nuxt.render)

// Run the server
const host: string = process.env.HOST || '0.0.0.0'
const port: number = Number(process.env.PORT) || 3000

app.listen(port, host, (err) => {
  if (err) {
    console.log(chalk.dim(err.stack))
  } else {
    console.log(
      '\n%s %s %s\n',
      chalk.bgGreen(chalk.black(' SERVER RUNNING ')),
      chalk.green('@'),
      chalk.green(`http://${host}:${port}`)
    )
  }
})

export default app
