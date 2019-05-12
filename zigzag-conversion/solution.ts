/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
export function convert(s, numRows) {
  if (s === '') {
    return s;
  }
  if (numRows === 1) return s;
  const {
    length
  } = s;
  const colCount$ = Math.ceil(length / (numRows * 2 - 2) * (numRows - 1));

  const matrix = Array(numRows)
    .fill(null)
    .map(() => Array(colCount$).fill(null));

  for (let index = 0; index < length; index++) {
    let rowIndex = index % (numRows * 2 - 2);
    let colIndex = (index / (numRows * 2 - 2)) | 0;
    if (rowIndex >= numRows) {
      colIndex = (colIndex * (numRows - 1)) + rowIndex - numRows + 1;
      rowIndex = (numRows - 1) * 2 - rowIndex;
    } else {
      colIndex *= (numRows - 1);
    }
    matrix[rowIndex][colIndex] = s[index];
  }

  const resArr = [];
  for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
    for (let colIndex = 0; colIndex < colCount$; colIndex++) {
      if (matrix[rowIndex][colIndex] !== null) {
        resArr.push(matrix[rowIndex][colIndex]);
      }
    }
  }
  return resArr.join('');
};