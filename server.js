if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

// React
import { matchPath } from 'react-router-dom'
import renderer from './src/helpers/renderer'
import configureStore from './src/redux/configureStore'
import routes from './src/routes'

const {
  PORT = 3000
} = process.env

const app = express()

app.use(bodyParser.json())

app.use(
	bodyParser.urlencoded({
		extended: false
	})
)

app.use('/static', express.static('./static'))
app.use(cookieParser())

app.get('*', (req, res) => {
  const context = {}
  const store = configureStore()

  const dataRequirements = routes
    .filter((route) => matchPath(req.url, route))
    .map((route) => route.component)
    .filter((comp) => comp.serverFetch)
    .map((comp) => store.dispatch(comp.serverFetch()))

  Promise.all([...dataRequirements]).then(() => {
    const content = renderer(req, context, store);
    return res.send(content)
  })
})

app.listen(PORT, () => console.log(`Server started listening ${PORT}`))
