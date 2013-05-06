#Convention

Module to wrap/unwrap functions in the node (err, results) convention.

`var convention = require('convention')`

[![browser support](https://ci.testling.com/nrn/convention.png)](https://ci.testling.com/nrn/convention)

##convention.wrap(errorHandler, successHandler)

Takes two functions, one to handle errors, the other results, and
returns them combined.

##convention.unwrap(nodeFn)

Takes a node style function, and returns an object with an
error property for the errorHandler and an success property for the
successHandler.

##License (MIT)

Copyright (c) 2013 Nick Niemeir <nick.niemeir@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

