import {
  runBenchmarks,
  bench,
} from 'https://deno.land/std/testing/bench.ts';
import {
  LPS,
} from './solution.ts';

bench({
  name: '最长公共回文子串 `short` 1000 次',
  runs: 1000,
  func(b) {
    b.start();
    LPS('a');
    b.stop();
  },
});

bench({
  name: '最长公共回文子串 `middle` 1000 次',
  runs: 1000,
  func(b) {
    b.start();
    LPS('balabalabalabalabalabalabalabalabalabalabalabalabalabalabalabalabala');
    b.stop();
  },
});

bench({
  name: '最长公共回文子串 `long` 1000 次',
  runs: 1000,
  func(b) {
    b.start();
    LPS(
      [
        'balabalabalabalabalabalabalabalabalabalabalabalabalabalabalabalabala',
        'balabalabalabalabalabalabalabalabalabalabalabalabalabalabalabalabala',
        'balabalabalabalabalabalabalabalabalabalabalabalabalabalabalabalabala',
        'balabalabalabalabalabalabalabalabalabalabalabalabalabalabalabalabala',
        'balabalabalabalabalabalabalabalabalabalabalabalabalabalabalabalabala',
      ].join(''),
    );
    b.stop();
  },
});

runBenchmarks();
