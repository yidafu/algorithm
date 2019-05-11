export function solution(version1: string, version2: string): boolean {
  if (version1 == version2) return false;
  const version1Arr = version1.split(/[.-]/);
  const version2Arr = version2.split(/[.-]/);
  const len1 = version1Arr.length;
  const len2 = version2Arr.length;
  const len = Math.min(len1, len2);
  
  let i;
  for (i = 0; i < len; ++i) {
    if (version1Arr[i] > version2Arr[i]) {
      return true;
    }
  }

  if (len1 > len2) return true;

  if (i === len1) {
    return false;
  }

  if (i === len2) {
    return true;
  }
}

console.log(solution('1.0.0-rc.1', '1.0.0'));
