import {
  runTests,
  test
} from "https://deno.land/std/testing/mod.ts";
import {
  assertEquals
} from "https://deno.land/std/testing/asserts.ts";

import {
  memo_cut_rod
} from './solution.ts';

test({
  name: "钢条问题测试10",
  fn() {
    const priceList = [ 1, 5, 8, 9, 10, 17, 17, 20, 24, 30,];
    assertEquals(memo_cut_rod(priceList, 0), 0);
    assertEquals(memo_cut_rod(priceList, 1), 1);
    assertEquals(memo_cut_rod(priceList, 2), 5);
    assertEquals(memo_cut_rod(priceList, 3), 8);
    assertEquals(memo_cut_rod(priceList, 4), 10);
    assertEquals(memo_cut_rod(priceList, 5), 13);
    assertEquals(memo_cut_rod(priceList, 6), 17);
    assertEquals(memo_cut_rod(priceList, 7), 18);
    assertEquals(memo_cut_rod(priceList, 8), 22);
    assertEquals(memo_cut_rod(priceList, 9), 25);
    assertEquals(memo_cut_rod(priceList, 10), 30);
    assertEquals(memo_cut_rod(priceList, 40), 120);
  }
});

test({
  name: '钢条问题测试100',
  fn() {
     const priceList = [1, 5, 8, 9, 10, 17, 17, 20, 24, 30, ...Array(90)
      .fill('').map( (val,idx) => 31 + idx * 2)];
    assertEquals(memo_cut_rod(priceList, 11), 31);
    assertEquals(memo_cut_rod(priceList, 40), 120);
    assertEquals(memo_cut_rod(priceList, 100), 300);
    assertEquals(memo_cut_rod(priceList, 120), 360);
  }
})

runTests();
