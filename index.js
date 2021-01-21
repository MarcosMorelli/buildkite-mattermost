'use strict'

const app = require('./app')
const http = require('http')
const { createTerminus } = require('@godaddy/terminus')

async function onHealthCheck () {
  // checks if the system is healthy, like the db connection is live
  // resolves, if health, rejects if not
}

function onSignal () {
  console.log('server is starting cleanup')
  // start cleanup of resource, like databases or file descriptors
}

const port = process.env.PORT || 5000

async function startServer () {
  createTerminus(http.createServer(app), {
    logger: console.log,
    signals: ['SIGINT', 'SIGTERM'],
    healthChecks: {
      '/healthcheck': onHealthCheck
    },

    onSignal
  }).listen(port, () => {
    console.log('Http server started. Listening on ' + port)
  })
}

startServer()
  .catch(err => console.error('connection error', err.stack))
