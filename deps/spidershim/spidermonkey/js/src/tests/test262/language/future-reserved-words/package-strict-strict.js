// |reftest| error:SyntaxError
'use strict';
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-identifiers-static-semantics-early-errors
es5id: 7.6.1.2-7-s
description: >
    Strict Mode - SyntaxError is thrown when 'package' occurs in strict mode code
info: |
    Identifier : IdentifierName but not ReservedWord

    It is a Syntax Error if this phrase is contained in strict mode code and the
    StringValue of IdentifierName is: "implements", "interface", "let", "package",
    "private", "protected", "public", "static", or "yield".
negative:
  phase: early
  type: SyntaxError
flags: [onlyStrict]
---*/

var package = 1;
