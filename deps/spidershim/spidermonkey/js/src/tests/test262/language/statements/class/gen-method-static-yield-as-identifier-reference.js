// |reftest| error:SyntaxError
// This file was procedurally generated from the following sources:
// - src/generators/yield-as-identifier-reference.case
// - src/generators/syntax/class-decl-static-method.template
/*---
description: yield is a reserved keyword within generator function bodies and may not be used as an identifier reference. (Static generator method as a ClassDeclaration element)
esid: prod-GeneratorMethod
flags: [generated]
negative:
  phase: early
  type: SyntaxError
info: |
    ClassElement :
      static MethodDefinition

    MethodDefinition :
      GeneratorMethod

    14.4 Generator Function Definitions

    GeneratorMethod :
      * PropertyName ( UniqueFormalParameters ) { GeneratorBody }

    IdentifierReference : Identifier

    It is a Syntax Error if this production has a [Yield] parameter and
    StringValue of Identifier is "yield".

---*/

class C {static *gen() {
    void yield;
}}
