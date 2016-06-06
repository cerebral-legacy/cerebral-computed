// class factories exported as CommonJS module "default"
var Computed = require('./lib/computed').default

module.exports = function (deps, cb) {
  return new Computed(deps, cb)
}
