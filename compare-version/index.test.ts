import {
  runTests,
  test,
} from 'https://deno.land/std/testing/mod.ts';
import {
  assert,
} from 'https://deno.land/std/testing/asserts.ts';

import {
  solution,
} from './solution.ts';

console.log(solution('1.0.0', '1.0.1'));
console.log(solution('1.0.0-alpha', '1.0.0-alpha.1'));
console.log(solution('1.0.0-alpha.1', '1.0.0-alpha.beta'));
console.log(solution('1.0.0-beta','1.0.0-beta.2' ));
console.log(solution('1.0.0-beta.2', '1.0.0-beta.11'));
console.log(solution('1.0.0-beta.11', '1.0.0-rc.1'));
console.log(solution('1.0.0-rc.1', '1.0.0'));

test({
  name: '版本比较',
  fn() {
    assert(!solution('1.0.0', '1.0.1'));
    assert(!solution('1.0.0-alpha', '1.0.0-alpha.1'));
    assert(!solution('1.0.0-alpha.1', '1.0.0-alpha.beta'));
    assert(!solution('1.0.0-beta','1.0.0-beta.2' ));
    assert(!solution('1.0.0-beta.2', '1.0.0-beta.11'));
    assert(!solution('1.0.0-beta.11', '1.0.0-rc.1'));
    assert(!solution('1.0.0-rc.1', '1.0.0'));
  },
});

runTests();