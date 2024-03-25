function lis(nums) {
  let n = nums.length;
  let len = Array(n + 1).fill(1);
  let maxLen = 1;

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        len[i] = Math.max(len[i], len[j] + 1);
      }
      maxLen = Math.max(len[i], maxLen);
    }
  }
  return maxLen;
}

let nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lis(nums));

nums = [0, 1, 0, 3, 2, 3];
console.log(lis(nums));

nums = [7, 7, 7, 7, 7, 7, 7];
console.log(lis(nums));

/*

 Time Complexity: O(n*2) where n is the length of nums
 Space Complexity: O(n) where n is the length of nums
 
*/