// |reftest| error:SyntaxError
'use strict';
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-identifiers-static-semantics-early-errors
es5id: 7.6.1-19-s
description: >
    7.6 - SyntaxError expected: reserved words used as Identifier
    Names in UTF8: privat\u0065 (private)
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

var privat\u0065 = 123;
