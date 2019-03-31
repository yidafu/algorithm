import { runBenchmarks, bench } from "https://deno.land/std/testing/bench.ts";
import { memo_cut_rod } from "./solution.ts";

bench({
  name: "runs100ForMemo_cut_rod",
  runs: 100,
  func(b) {
    const priceList = [1, 5, 8, 9, 10, 17, 17, 20, 24, 30];
    b.start();
    memo_cut_rod(priceList, 10);
    b.stop();
  }
});

bench({
  name: "runs100ForMemo_cut_rod",
  runs: 100,
  func(b) {
    const priceList = [1, 5, 8, 9, 10, 17, 17, 20, 24, 30, ...Array(70)
      .fill('').map( (val,idx) => 31 + idx)];
    b.start();
    memo_cut_rod(priceList, 100);
    b.stop();
  }
});

runBenchmarks();