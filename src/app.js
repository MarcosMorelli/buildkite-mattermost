'use strict'

const compression = require('compression')
const express = require('express')
const routesV1 = require('./routes/v1')

const app = express()
app.use(compression())
app.use('/v1', routesV1)

app.disable('etag')
app.disable('x-powered-by')

module.exports = app
