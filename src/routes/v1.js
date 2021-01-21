'use strict'

const router = require('express').Router()
const controller = require('../controller')
const tools = require('../tools')

tools.router.create(router, 'POST', '/file-uploader', controller.FileUploader.post)

module.exports = router
