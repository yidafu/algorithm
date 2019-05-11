/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    const res = [];
    let flag = 0;
    let lastIndex = 0;
    for (let index = 0; index < S.length; index ++) {
      // stack.push(S[index]);
      if (S[index] === '(') {
        flag += 1;
      } else {
        flag -= 1;
      }

      if (flag === 0) {
        res.push(S.slice(lastIndex + 1, index));
        lastIndex = index + 1;
      }
    }
    return res.join('');
};

console.log(
  removeOuterParentheses('()()')
)
