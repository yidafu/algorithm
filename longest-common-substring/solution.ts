export function LCS(str1, str2) {
  const len1 = str1.length;
  const len2 = str2.length;

  const martix = Array(len1 + 1).fill(null)
    .map(() => Array(len2 + 1).fill(0));
  let lastRowIndex = 0;
  let lastColIndex = 0;
  let maxLen = 0;

  for (let index1 = 1; index1 <= len1; index1++) {
    for (let index2 = 1; index2 <= len2; index2++) {
      if (str1[index1 - 1] === str2[index2 - 1]) {
        martix[index1][index2] = martix[index1 - 1][index2 - 1] + 1;

        if (maxLen < martix[index1][index2]) {
          lastRowIndex = index1;
          lastColIndex = index2;
          maxLen = martix[index1][index2];
        }
      }
    }
  }

  if (maxLen < 1) {
    return '';
  }
  const resArr = [];
  while (martix[lastRowIndex][lastColIndex] > 0) {
    resArr.unshift(str1[lastRowIndex - 1]);
    lastColIndex--;
    lastRowIndex--;
  }
  return resArr.join('');
}
