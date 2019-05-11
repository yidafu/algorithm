/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
    let deletion = 0;
    for (var col = 0; col < A[0].length; col ++) {
        for (var row = 0; row < A.length - 1; row ++) {
            if (A[row][col] > A[row + 1][col]) {
                deletion +=1;
                break;
            }
        }
    }
    return deletion;
};
