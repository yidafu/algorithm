import { runBenchmarks, bench } from 'https://deno.land/std/testing/bench.ts';
import { LCS } from './solution.ts';

bench({
  name: '最长公共字串 1000 次',
  runs: 1000,
  func(b) {
    LCS(
      'Algorithms and data structures implemented in JavaScript',
      'Here you may find Algorithms and data structures that are implemented in JavaScript',
    );
    b.stop();
  },
});

runBenchmarks();
