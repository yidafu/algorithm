/**
 * a buttom up implement
 * @param str1
 * @param str2
 */
export function LCS(str1: string, str2:string): string {
  const len1: number = str1.length;
  const len2: number = str2.length;

  const martix: number[][] = Array(len1 + 1).fill(null)
    .map(() => Array(len2 + 1).fill(0));
  let lastRowIndex: number = 0;
  let lastColIndex: number = 0;
  let maxLen: number = 0;

  for (let index1: number = 1; index1 <= len1; index1++) {
    for (let index2: number = 1; index2 <= len2; index2++) {
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
  const resArr: string[] = [];
  while (martix[lastRowIndex][lastColIndex] > 0) {
    resArr.unshift(str1[lastRowIndex - 1]);
    lastColIndex--;
    lastRowIndex--;
  }
  return resArr.join('');
}

export function LCS2(str1: string, str2: string): string {
  const len1: number = str1.length;
  const len2: number = str2.length;
  const martix: number[][] = Array(len1 + 1)
    .fill(null)
    .map(() => Array(len2 + 1).fill(-1));
  let lastRowIndex: number = 0;
  let lastColIndex: number = 0;
  let maxLen: number = -Infinity;

  function memoLCS2(right1: number, right2: number): number {
    if (right1 >= len1 || right2 >= len2) {
      return 0;
    }
    if (martix[right1][right2] > -1) {
      return martix[right1][right2];
    }
    if (
      str1[right1] === str2[right2]
    ) {
      martix[right1][right2] = memoLCS2(right1 + 1, right2 + 1) + 1;
      if (maxLen < martix[right1][right2]) {
        lastRowIndex = right1;
        lastColIndex = right2;
        maxLen = martix[right1][right2];
      }
      return martix[right1][right2];
    }
    const lenght1 = memoLCS2(right1 + 1, right2);
    const lenght2 = memoLCS2(right1, right2 + 1);

    martix[right1][right2] = 0;
    return Math.max(lenght1, lenght2);
  }
  memoLCS2(0, 0);
  if (maxLen < 1) {
    return '';
  }
  const resArr: string[] = [];
  while (martix[lastRowIndex][lastColIndex] > 0) {
    resArr.push(str2[lastColIndex]);
    lastColIndex++;
    lastRowIndex++;
  }
  return resArr.join('');
}
