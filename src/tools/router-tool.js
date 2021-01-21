'use strict'

const error = require('./error-tool')

class RouterTool {
  static async create (router, verb, path, controller) {
    switch (verb) {
      case 'GET':
        router.route(path).get((req, res, next) => error.verifyError(req, res, next, controller))
        break
      case 'POST':
        router.route(path).post((req, res, next) => error.verifyError(req, res, next, controller))
        break
      case 'PUT':
        router.route(path).put((req, res, next) => error.verifyError(req, res, next, controller))
        break
      case 'PATCH':
        router.route(path).patch((req, res, next) => error.verifyError(req, res, next, controller))
        break
      case 'DELETE':
        router.route(path).delete((req, res, next) => error.verifyError(req, res, next, controller))
    }
  }
}

module.exports = RouterTool
