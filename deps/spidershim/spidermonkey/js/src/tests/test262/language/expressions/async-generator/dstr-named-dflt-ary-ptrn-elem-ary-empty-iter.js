// |reftest| skip-if(release_or_beta) -- async-iteration is not released yet
// This file was procedurally generated from the following sources:
// - src/dstr-binding/ary-ptrn-elem-ary-empty-iter.case
// - src/dstr-binding/default/async-gen-func-named-expr-dflt.template
/*---
description: BindingElement with array binding pattern and initializer is not used (async generator named function expression (default parameter))
esid: sec-asyncgenerator-definitions-evaluation
features: [async-iteration]
flags: [generated, async]
info: |
    AsyncGeneratorExpression : async [no LineTerminator here] function * BindingIdentifier
        ( FormalParameters ) { AsyncGeneratorBody }

        [...]
        7. Let closure be ! AsyncGeneratorFunctionCreate(Normal, FormalParameters,
           AsyncGeneratorBody, funcEnv, strict).
        [...]


    13.3.3.6 Runtime Semantics: IteratorBindingInitialization

    BindingElement : BindingPatternInitializer opt

    1. If iteratorRecord.[[done]] is false, then
       a. Let next be IteratorStep(iteratorRecord.[[iterator]]).
       [...]
       e. Else,
          i. Let v be IteratorValue(next).
          [...]
    4. Return the result of performing BindingInitialization of BindingPattern
       with v and environment as the arguments.
---*/
var initCount = 0;


var callCount = 0;
var f;
f = async function* h([[] = function() { initCount += 1; }()] = [[23]]) {
  assert.sameValue(initCount, 0);
  callCount = callCount + 1;
};

f().next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');
}).then($DONE, $DONE);
