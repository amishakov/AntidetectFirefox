// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-3-5
description: >
    Array.prototype.lastIndexOf - value of 'length' is a number (value
    is +0)
---*/

        var obj = { 0: +0, length: +0 };

assert.sameValue(Array.prototype.lastIndexOf.call(obj, +0), -1, 'Array.prototype.lastIndexOf.call(obj, +0)');

reportCompare(0, 0);