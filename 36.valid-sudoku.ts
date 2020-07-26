/*
 * @lc app=leetcode id=36 lang=typescript
 *
 * [36] Valid Sudoku
 */

// @lc code=start

function isValidSudoku(board: string[][]): boolean {
    
    const DOT_CHAR = '.';
    const nineSet = new Set();
    const rowLen = board.length;
    const colLen = board[0].length;

    function validSubBox(board: string[][], rowIdx: number, colIdx: number): boolean {
        for (let row = rowIdx; row < rowIdx + 3; row++) {
            for (let col = colIdx; col < colIdx + 3; col++) {
                const num = board[row][col];
                if (num !== DOT_CHAR) {
                    if (nineSet.has(num)) {
                        return false;
                    } else {
                        nineSet.add(num);
                    }
                }
        }
        }
        nineSet.clear();
        return true;
    }

    function unique(board: string[][], rowIdx: number, colIdx: number): boolean {
        for(let row = 0; row < rowLen; row++) {
            const num = board[row][colIdx];
            if (num !== DOT_CHAR) {
                if (nineSet.has(num)) {
                    return false;
                } else {
                    nineSet.add(num);
                }
            }
        }
        nineSet.clear();

        for(let col = 0; col < colLen; col++) {
            const num = board[rowIdx][col];
            if (num !== DOT_CHAR) {
                if (nineSet.has(num)) {
                    return false;
                } else {
                    nineSet.add(num);
                }
            }
        }
        nineSet.clear();

        return true;
    }

    for(let row = 0, col = 0; row < rowLen && col < colLen; row ++, col++) {
        const isValid = unique(board, row, col);
        if (!isValid) {
            return false;
        }

        if (row % 3 === 0 && col % 3 === 0) {
            for (let row2 = row; row2 < rowLen; row2 += 3) {
                for (let col2 = col; col2 < colLen; col2 += 3) {
                    const isValid = validSubBox(board, row2, col2);
                    if (!isValid) {
                        return false;
                    }
                }
            }
        }
    }
    return true;
};

// @lc code=end


const testcase = [
    [".",".",".",".","5",".",".","1","."],
    [".","4",".","3",".",".",".",".","."],
    [".",".",".",".",".","3",".",".","1"],
    ["8",".",".",".",".",".",".","2","."],
    [".",".","2",".","7",".",".",".","."],
    [".","1","5",".",".",".",".",".","."],
    [".",".",".",".",".","2",".",".","."],
    [".","2",".","9",".",".",".",".","."],
    [".",".","4",".",".",".",".",".","."]]

isValidSudoku(testcase);