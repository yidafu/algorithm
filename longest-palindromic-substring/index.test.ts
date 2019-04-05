import { runTests, test } from 'https://deno.land/std/testing/mod.ts';
import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';
import { LPS } from './solution.ts';

test({
  name: '最长回文子串',
  fn() {
    assertEquals(LPS(''), '');
    assertEquals(LPS('babad'), 'bab');
    assertEquals(LPS('cbbd'), 'bb');
    assertEquals(LPS('aacdefcaa'), 'aa');
    assertEquals(LPS('aaaa'), 'aaaa');
  },
});

runTests();
