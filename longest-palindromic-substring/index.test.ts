import { runTests, test } from 'https://deno.land/std/testing/mod.ts';
import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';
import { LPS, LPS2 } from './solution.ts';

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

test({
  name: '最长回文子串: Expand Around Center 解法',
  fn() {
    assertEquals(LPS2(''), '');
    assertEquals(LPS2('babad'), 'bab');
    assertEquals(LPS2('cbbd'), 'bb');
    assertEquals(LPS2('aacdefcaa'), 'aa');
    assertEquals(LPS2('aaaa'), 'aaaa');
    assertEquals(LPS2('bb'), 'bb');
  },
});

runTests();
