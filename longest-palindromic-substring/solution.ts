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
