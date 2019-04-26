function solution(arr: string[]) {
  const res: string[][] = [];

  function fullPermutation(permutation: string[], from: number, to: number) {
    if (from === to) {
      res.push(permutation);
    }
    for (let i = 0; i < to; i++) {
      if (!~permutation.indexOf(arr[i])) {
        const copy = [...permutation, arr[i]];
        fullPermutation(copy, from + 1, to);
      }
    }
  }
  for (const char of arr) {
    const item: string[] = [char];
    fullPermutation(item, 1, arr.length);
  }
  return res;
}
