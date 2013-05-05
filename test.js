var test = require('tape')
  , c = require('./index.js')

test('conventions', function (t) {
  var unwrap = c.unwrap(function (e, res) { if (e) t.equal(e, 1); if (res) t.equal(res, 2);})
  function a (b) {
    return function (c) {
      t.equal(c, b)
    }
  }
  var wrap = c.wrap(a(1), a(2))
  t.plan(4)
  unwrap.e(1)
  unwrap.s(2)
  wrap(null, 2)
  wrap(1)

})
