/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
  let low = 0, high = A.length -1;
  while (low < high) {
    var min = low + (high - low) / 2 | 0;
    if (A[min] < A[min + 1]) {
        low = min + 1;
    } else {
        high = min;
    }
  }
    return low;
};
