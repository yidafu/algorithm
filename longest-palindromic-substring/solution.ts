export function LPS(s: string): string {
  if (s === '') return '';
  const matrix: boolean[][] = Array(s.length).fill(null)
    .map(() => Array(s.length).fill(undefined));
  const { length } = s;

  for (let index: number = 0; index < length; index++) {
    matrix[index][index] = true;
  }
  let startIndex: number = 0;
  let endIndex: number = 0;
  for (let offset: number = 1; offset < length; offset++) {
    for (let index: number = 0; index < length - offset; index++) {
      if (
        offset === 1
        && s[index] === s[index + offset]
      ) {
        matrix[index][index + offset] = true;
      } else if (
        matrix[index + 1][index + offset - 1]
        && s[index] === s[index + offset]
      ) {
        matrix[index][index + offset] = true;
      }
      if (matrix[index][index + offset]) {
        if (endIndex - startIndex < offset) {
          startIndex = index;
          endIndex = index + offset;
        }
      }
    }
  }
  return s.substring(startIndex, endIndex + 1);
}

export function LPS2(s: string): string {
  if (s === '') return '';
  let start: number = 0;
  let end: number = 0;
  let max: number = -Infinity;
  const { length } = s;
  function expandAroundCenter(left: number, right: number): number {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  }
  for (let index: number = 0; index < length; index++) {
    const len1: number = expandAroundCenter(index, index);
    const len2: number = expandAroundCenter(index, index + 1);
    const len: number = Math.max(len1, len2);
    if (max < len) {
      max = len;
      start = index - ((len - 1) / 2 | 0);
      end = index + (len / 2 | 0);
    }
  }
  return s.substring(start, end + 1);
}
