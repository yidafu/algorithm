/*
 * @lc app=leetcode id=37 lang=typescript
 *
 * [37] Sudoku Solver
 */

// @lc code=start
/**
 Do not return anything, modify board in-place instead.
 */
function solveSudoku(board: string[][]): void {

  const rowLen = board.length;
  const colLen = board[0].length;
  const DOT_CHAR = '.';
  /** q like 9 */
  const qMap = new Map <string, number> ();

  function mapPlusOne(map: Map<string, number>, key: string) {
    if (map.has(key)) {
      map.set(key, map.get(key) + 1);
    } else {
      map.set(key, 1);
    }
  }

  let rowIdx = 0;
  let colIdx = 0;
  top:
    while (rowIdx < rowLen) {
      while (colIdx < colLen) {
        // for(let rowIdx = 0; rowIdx < rowLen; rowIdx++) {
        //   for(let colIdx = 0; colIdx < colLen; colIdx++) {

        const num = board[rowIdx][colIdx];
        if (num === DOT_CHAR) {

          for (let innerRowIdx = 0; innerRowIdx < rowLen; innerRowIdx++) {
            const num = board[innerRowIdx][colIdx];
            if (num !== DOT_CHAR) {
              mapPlusOne(qMap, num);
            }
          }

          for (let innerColIdx = 0; innerColIdx < colLen; innerColIdx++) {
            const num = board[rowIdx][innerColIdx];
            if (num !== DOT_CHAR) {
              mapPlusOne(qMap, num);
            }
          }

          const subStartRowIdx = rowIdx - (rowIdx % 3);
          const subStartColIdx = colIdx - (colIdx % 3);
          for (let subRowIdx = subStartRowIdx; subRowIdx < subStartRowIdx + 3; subRowIdx++) {
            for (let subColIdx = subStartColIdx; subColIdx < subStartColIdx + 3; subColIdx++) {
              const num = board[subRowIdx][subColIdx];
              if (num !== DOT_CHAR) {
                mapPlusOne(qMap, num);
              }
            }
          }

          // 如果某行已填数字的单元格达到8个,那么该行剩余单元格能填的数字就只剩下那个还没出现过的数字；
          // 同理， 如果某列已填数字的单元格达到8个,那么该列剩余单元格能填的数字就只剩下那个还没出现过的数字；
          // 如果某九宫格已填数字的单元格达到8个,那么该九宫格剩余单元格能填的数字就只剩下那个还没出现过的数字。

          // 由于1-9这9个数字要在每行、每列和每个九宫格内至少出现一次，所以如果某个数字在某行、
          // 某列或是某个九宫格内所有单元格的候选数列表中只出现一次，那么这个数字就应该填入它出现的那个单元格内，
          // 并且从该格所在行、所在列和所在九宫格内其它单元格的候选数列表中删除该数字。
          const usedNum: string[] = [];
          qMap.forEach((value, key) => {
            if (value === 3) {
              usedNum.push(key);
            }
          });
          if (qMap.size === 8 - usedNum.length) {
            for (let i = 1; i < 10; i++) {
              const num = i.toString();
              if (!qMap.has(num) && usedNum.indexOf(num) === -1) {
                board[rowIdx][colIdx] = num;
                qMap.clear();
                rowIdx = 0;
                colIdx = 0;
                continue top;
              }
            }
          }
          qMap.clear();
        }

        colIdx++;
      }
      colIdx = 0;
      rowIdx++;
    }
};
// @lc code=end


const testcase2 = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
const testcase3 = [
  [".",".","9","7","4","8",".",".","."],
  ["7",".",".",".",".",".",".",".","."],
  [".","2",".","1",".","9",".",".","."],
  [".",".","7",".",".",".","2","4","."],
  [".","6","4",".","1",".","5","9","."],
  [".","9","8",".",".",".","3",".","."],
  [".",".",".","8",".","3",".","2","."],
  [".",".",".",".",".",".",".",".","6"],
  [".",".",".","2","7","5","9",".","."]];
solveSudoku(testcase2)

console.table(testcase3);
