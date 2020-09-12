/*
 * @lc app=leetcode id=1 lang=rust
 *
 * [1] Two Sum
 */
use std::*;

struct Solution { }

// @lc code=start
impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
      for i in 0..nums.len() {
        for j in (i+1)..nums.len() {
          let val = nums.get(i).unwrap() +  nums.get(j).unwrap();
          if val == target {
            let mut vec: Vec<i32> = Vec::new();
            vec.push(i as i32);
            vec.push(j as i32);
            return vec;
          }
        }
      }
      Vec::new()
    }
}
// @lc code=end

#[cfg(test)]
mod tests {
    use super::*;

  #[test]
  fn test_two_sum_1() {
    let nums = vec![2,7,11,15];
    let res = Solution::two_sum(nums, 9);
    let mut vec = Vec::new();
    vec.push(0);
    vec.push(1);
    assert_eq!(res, vec);
  }

  #[test]
  fn test_two_sum_2() {
    let nums = vec![3,2,4];
    let res = Solution::two_sum(nums, 6);
    let mut vec = Vec::new();
    vec.push(1);
    vec.push(2);
    assert_eq!(res, vec);
  }

  #[test]
  fn test_two_sum_3() {
    let nums = vec![3,3];
    let res = Solution::two_sum(nums, 6);
    let mut vec = Vec::new();
    vec.push(0);
    vec.push(1);
    assert_eq!(res, vec);
  }
}
