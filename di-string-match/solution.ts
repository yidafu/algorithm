/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
  const res = Array(S.length + 1).fill(0);

  for (var index = 0; index < S.length; index ++) {
    if (S[index] === "I") res[index + 1] = res[index] + 1;
    if (S[index] === "D") res[index] = res[index + 1] + 1;
    console.log(res)
  }
  return res;
};

console.log(diStringMatch('IDID'))
// a < b > c < d > e
