
/*
 * @lc app=leetcode id=43 lang=java
 *
 * [43] Multiply Strings
 */

// @lc code=start
class Solution {

  public int toInt(char c) {
    return (int) c - 48;
  }

  public int toInt(CharSequence chars) {
    int ret = 0;
    int m = 1;
    for (int i = chars.length() - 1; i >= 0; i --) {
      ret += toInt(chars.charAt(i)) * m;
      m *= 10;
    }
    return ret;
  }
    public String multiply(String num1, String num2) {
      if (num1.equals("0") || num2.equals("0"))
        return "0";

      char[] arr1 = num1.toCharArray();
      char[] arr2 = num2.toCharArray();

      int i = arr1.length - 1,j=arr2.length - 1;
      // List<Character> res = new ArrayList<Character>();
      String res = "0";
      int round = 0;
      while (i >= 0 && j >= 0) {

        int m = i, n = j;
        int oblique = 0;
        while (m < arr1.length && n >= 0) {
           oblique += toInt(arr1[m]) * toInt(arr2[n]);
          m ++; n--;
        }

        String temp = String.valueOf(oblique + toInt(res.subSequence(0, res.length() - round)));
        res = temp + res.subSequence(res.length() - round, res.length());
        round ++;
        if (i > 0) {
          i--;
        } else {
          j--;
        }
      }

      return res;
    }
}
// @lc code=end

