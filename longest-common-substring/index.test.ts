import { runTests, test } from 'https://deno.land/std/testing/mod.ts';
import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';
import { LCS } from './solution.ts';

test({
  name: '最长公共字串',
  fn() {
    assertEquals(LCS('', ''), '');
    assertEquals(LCS('ABC', ''), '');
    assertEquals(LCS('', 'ABC'), '');
    assertEquals(LCS('ABABC', 'BABCA'), 'BABC');
    assertEquals(LCS('BABCA', 'ABCBA'), 'ABC');
    assertEquals(LCS(
      'Algorithms and data structures implemented in JavaScript',
      'Here you may find Algorithms and data structures that are implemented in JavaScript',
    ), 'Algorithms and data structures ');
  },
});

runTests();
