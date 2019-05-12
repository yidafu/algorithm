// 4 "PAYPALISHIRING"

// PINALSIGYAHRPI;
import { runTests, test } from 'https://deno.land/std/testing/mod.ts';
import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';

import { convert } from './solution.ts';

test({
  name: 'ZigZag Conversion',
  fn() {
    /*
      P     I    N
      A   L S  I G
      Y A   H R
      P     I
    */
    assertEquals(convert('PAYPALISHIRING', 4), 'PINALSIGYAHRPI');
    assertEquals(convert('', 1), '');
    assertEquals(convert('a', 1), 'a');
  },
});

runTests();
