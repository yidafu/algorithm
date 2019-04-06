import { runBenchmarks, bench } from 'https://deno.land/std/testing/bench.ts';
import { LCS, LCS2 } from './solution.ts';

bench({
  name: '最长公共字串 middle 1000 次',
  runs: 1000,
  func(b) {
    b.start();
    LCS(
      'Algorithms and data structures implemented in JavaScript',
      'Here you may find Algorithms and data structures that are implemented in JavaScript',
    );
    b.stop();
  },
});

bench({
  name: '最长公共字串 middle 递归 1000 次',
  runs: 1000,
  func(b) {
    b.start();
    LCS2(
      'Algorithms and data structures implemented in JavaScript',
      'Here you may find Algorithms and data structures that are implemented in JavaScript',
    );
    b.stop();
  },
});

bench({
  name: '最长公共字串 1000 次',
  runs: 1000,
  func(b) {
    b.start();
    LCS(
      `Sing the song of the moment in careless carols, in the transient light of the day;
Sing of the fleeting smiles that vanish and never look back;
Sing of the flowers that bloom and fade without regret.
Weave not in memory’s thread the days that would glide into nights.
To the guests that must go bid God-speed, and wipe away all traces of their steps.
Let the moments end in moments with their cargo of fugitive songs.`,
      `With both hands snap the fetters you made with your own heart chords;
Take to your breast with a smile what is easy and simple and near.
Today is the festival of phantoms that know not when they die.
Let your laughter flush in meaningless mirth like twinkles of light on the ripples;
Let your life lightly dance on the verge of Time like a dew on the tip of a leaf.
Strike in the chords of your harp the fitful murmurs of moments.`,
    );
    b.stop();
  },
});

bench({
  name: '最长公共字串 递归 1000 次',
  runs: 1000,
  func(b) {
    b.start();
    LCS2(
      `Sing the song of the moment in careless carols, in the transient light of the day;
Sing of the fleeting smiles that vanish and never look back;
Sing of the flowers that bloom and fade without regret.
Weave not in memory’s thread the days that would glide into nights.
To the guests that must go bid God-speed, and wipe away all traces of their steps.
Let the moments end in moments with their cargo of fugitive songs.`,
      `With both hands snap the fetters you made with your own heart chords;
Take to your breast with a smile what is easy and simple and near.
Today is the festival of phantoms that know not when they die.
Let your laughter flush in meaningless mirth like twinkles of light on the ripples;
Let your life lightly dance on the verge of Time like a dew on the tip of a leaf.
Strike in the chords of your harp the fitful murmurs of moments.`,
    );
    b.stop();
  },
});

runBenchmarks();
