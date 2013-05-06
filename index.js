var p = require('pasta')()

function wrap (efn, resfn) {
  // Provide an error function so this doesn't happen to you.
  if (typeof efn !== 'function') efn = function (e) {if (e) throw e}
  if (typeof resfn !== 'function') resfn = function () {}
  return function (e) {
    if (e) return efn(e)
    var args = p.arrify(arguments).slice(1)
    return resfn.apply(this, args)
  }
}

function unwrap (fn) {

  function error (err) {
    return fn.call(this, err)
  }

  function success () {
    var args = [null].concat(p.arrify(arguments))
    return fn.apply(this, args)
  }

  return { error: error, success: success}
}

module.exports = { wrap: wrap, unwrap: unwrap }

