'use strict'

const bodyParser = require('body-parser')
const compression = require('compression')
const express = require('express')
const controller = require('./controller')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(compression())

app.post('/file-uploader', controller.FileUploader.post)

app.disable('etag')
app.disable('x-powered-by')

module.exports = app
