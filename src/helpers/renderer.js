import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ServerStyleSheet } from 'styled-components'
import { Provider } from 'react-redux'
import serialize from 'serialize-javascript'

import App from '../App'

export default (req, context, store) => {
  const sheet = new ServerStyleSheet();
  const helmetContext = {}

  const content = renderToString(
    sheet.collectStyles(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <HelmetProvider context={helmetContext}>
            <App />
          </HelmetProvider>
        </StaticRouter>
      </Provider>
    )
  );

  const styleTags = sheet.getStyleTags()
  const reduxState = store.getState()

  const { bodyAttributes, htmlAttributes, ...helmet } = helmetContext.helmet

  return `<!DOCTYPE html>
          <html ${htmlAttributes.toString()} lang="en">
            <head>
              <meta charset="UTF-8">
              ${Object.values(helmet)
                .map(datum => datum.toString())
                .join('')}
              <!-- twitter-->
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:site" content="SimpleSwap | Cryptocurrency Exchange | Easy way to change coins" />
              <meta name="twitter:description" content="SimpleSwap.io is a simple and easy-to-use platform for cryptocurrency exchanges that works without registration and limits. SimpleSwap supports more than 175 coins and guarantees safe exchanges." />
              <meta name="twitter:creator" content="@SimpleSwap_io" />
              <meta name="twitter:domain" content="simpleswap.io" />
              <!-- opengraph-->
              <meta property="og:description" content="SimpleSwap.io is a simple and easy-to-use platform for cryptocurrency exchanges that works without registration and limits. SimpleSwap supports more than 175 coins and guarantees safe exchanges." />
              <meta property="og:url" content="https://simpleswap.io" />
              <meta property="og:type" content="website" />
              <meta property="og:site_name" content="SimpleSwap | Cryptocurrency Exchange | Easy way to change coins" />
              <!-- misc-->
              <meta name="robots" content="index" />
              <link rel="shortcut icon" type="image/png" href="/static/img/favicon-34e147b6.png" />
              <link rel="apple-touch-icon" type="image/png" sizes="57x57" href="/static/img/favicon-34e147b6.png" />
              <link rel="apple-touch-icon" type="image/png" sizes="60x60" href="/static/img/favicon-34e147b6.png" />
              <link rel="apple-touch-icon" sizes="72x72" type="image/png" href="/static/img/favicon-34e147b6.png" />
              <link rel="apple-touch-icon" sizes="76x76" type="image/png" href="/static/img/favicon-34e147b6.png" />
              <link rel="apple-touch-icon" sizes="114x114" type="image/png" href="/static/img/favicon-34e147b6.png" />
              <link rel="apple-touch-icon" sizes="120x120" type="image/png" href="/static/img/favicon-34e147b6.png" />
              <link rel="apple-touch-icon" sizes="144x144" type="image/png" href="/static/img/favicon-34e147b6.png" />
              <link rel="apple-touch-icon" sizes="152x152" type="image/png" href="/static/img/favicon-34e147b6.png" />
              <link rel="apple-touch-icon" sizes="180x180" type="image/png" href="/static/img/favicon-34e147b6.png" />
              <script async src="https://www.googletagmanager.com/gtag/js?id=UA-117436619-1"></script>
              <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-117436619-1');
              </script>
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
              <meta http-equiv="X-UA-Compatible" content="ie=edge">
              <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap" rel="stylesheet">
              ${styleTags}
            </head>
            <body ${bodyAttributes.toString()}>
              <div id="root">${content}</div>
              <script>
                window.__REDUX_DATA__ = ${serialize(reduxState, { isJSON: true })}
              </script>
              <script src="/dist/app.bundle.js}"></script>
            </body>
          </html>
          `;
}
