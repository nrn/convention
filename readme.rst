===============================================================================
Convention
===============================================================================

Module to wrap/unwrap functions in the node (err, results) convention.

`var c = require('convention')`

c.wrap(errorHandler, successHandler)
====================================

takes two functions, one to handle errors, the other results, and
returns them combined.

c.unwrap(nodeFn)
================

Takes a node style function, and returns an object with an
e property for the errorHandler and an s property for the
successHandler.

