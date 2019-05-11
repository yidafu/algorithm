// import {
//   runTests,
//   test,
// } from 'https://deno.land/std/testing/mod.ts';
// import {
//   assertEquals,
// } from 'https://deno.land/std/testing/asserts.ts';
// import { solution1 } from './solution';
//
// test({
//   name: "千位分隔",
//   fn() {
//     assertEquals(solution1(''), '');
//     assertEquals(solution1('1'), '1');
//     assertEquals(solution1('12'), '12');
//     assertEquals(solution1('123'), '123');
//     assertEquals(solution1('1234'), '1234');
//     assertEquals(solution1('123456'), '123456');
//     assertEquals(solution1('123456'), '123456');
//     assertEquals(solution1('1234567'), '1234567');
//   }
// })

const assert = require('assert');
const {solution1, solution2, solution3, solution4, solution5 } = require('./solution.ts');

assert.equal(solution1(''), '');
assert.equal(solution1('1'), '1');
assert.equal(solution1('12'), '12');
assert.equal(solution1('123'), '123');
assert.equal(solution1('1234'), '1,234');
assert.equal(solution1('123456'), '123,456');
assert.equal(solution1('123456'), '123,456');
assert.equal(solution1('1234567'), '1,234,567');

assert.equal(solution2(''), '');
assert.equal(solution2('1'), '1');
assert.equal(solution2('12'), '12');
assert.equal(solution2('123'), '123');
assert.equal(solution2('1234'), '1,234');
assert.equal(solution2('123456'), '123,456');
assert.equal(solution2('1234567'), '1,234,567');

assert.equal(solution3(''), '');
assert.equal(solution3('1'), '1');
assert.equal(solution3('12'), '12');
assert.equal(solution3('123'), '123');
assert.equal(solution3('1234'), '1,234');
assert.equal(solution3('123456'), '123,456');
assert.equal(solution3('1234567'), '1,234,567');

assert.equal(solution4(''), '');
assert.equal(solution4('1'), '1');
assert.equal(solution4('12'), '12');
assert.equal(solution4('123'), '123');
assert.equal(solution4('1234'), '1,234');
assert.equal(solution4('123456'), '123,456');
assert.equal(solution4('1234567'), '1,234,567');

assert.equal(solution5(''), '');
assert.equal(solution5('1'), '1');
assert.equal(solution5('12'), '12');
assert.equal(solution5('123'), '123');
assert.equal(solution5('1234'), '1,234');
assert.equal(solution5('123456'), '123,456');
assert.equal(solution5('1234567'), '1,234,567');
