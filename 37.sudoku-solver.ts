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

  function  getSuitNums([rowIdx, colIdx]: [number, number]): Set<string> | undefined {

    /** q like 9 */
    const qSet = new Set <string>();
    qSet.add('1');qSet.add('2');qSet.add('3');
    qSet.add('4');qSet.add('5');qSet.add('6');
    qSet.add('7');qSet.add('8');qSet.add('9');
    // 检查列重复情况
    for (let innerRowIdx = 0; innerRowIdx < rowLen; innerRowIdx++) {
      const num = board[innerRowIdx][colIdx];
      if (num !== DOT_CHAR) {
        qSet.delete(num);
      }
    }

    // 检查行数字重复
    for (let innerColIdx = 0; innerColIdx < colLen; innerColIdx++) {
      const num = board[rowIdx][innerColIdx];
      if (num !== DOT_CHAR) {
        qSet.delete(num);
      }
    }

    // 检查小九格
    const subStartRowIdx = rowIdx - (rowIdx % 3);
    const subStartColIdx = colIdx - (colIdx % 3);
    for (let subRowIdx = subStartRowIdx; subRowIdx < subStartRowIdx + 3; subRowIdx++) {
      for (let subColIdx = subStartColIdx; subColIdx < subStartColIdx + 3; subColIdx++) {
        const num = board[subRowIdx][subColIdx];
        if (num !== DOT_CHAR) {
          qSet.delete(num);
        }
      }
    }

    // 如果某行已填数字的单元格达到8个,那么该行剩余单元格能填的数字就只剩下那个还没出现过的数字；
    // 同理， 如果某列已填数字的单元格达到8个,那么该列剩余单元格能填的数字就只剩下那个还没出现过的数字；
    // 如果某九宫格已填数字的单元格达到8个,那么该九宫格剩余单元格能填的数字就只剩下那个还没出现过的数字。
    return qSet;
  }

  function getNoNumberCell(): [number, number] | undefined {

    // while (rowIdx < rowLen) {
    //   while (colIdx < colLen) {
        for(let rowIdx = 0; rowIdx < rowLen; rowIdx++) {
          for(let colIdx = 0; colIdx < colLen; colIdx++) {

        const num = board[rowIdx][colIdx];

        if (num === DOT_CHAR) {
          return [rowIdx, colIdx];
        }
      }
    }
  }

  function checkSudoku() {
    const noNumberPos = getNoNumberCell();

    if (!noNumberPos) {
      return true;
    }

    const suitNums = getSuitNums(noNumberPos);
    if (!suitNums || suitNums.size === 0) {
      return false;
    }
    for (const nums of suitNums) {
      board[noNumberPos[0]][noNumberPos[1]] = nums;
      if (checkSudoku()) {
        return true;
      }
      board[noNumberPos[0]][noNumberPos[1]] = DOT_CHAR;
    }
    return false;
  }

  checkSudoku();
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


solveSudoku(testcase3)

console.table(testcase3);
