function findTargetFOrDoubles(arr, target) {
  let map = new Map();
  for (let i = 0; i<arr.length; ++i) {
    let diff = target - arr[i];
    console.log(diff)
    if (map.has(diff)) {
      return map.get(diff) + i;
    }
    map.set(arr[i], i);
    console.log("getdiff", diff, map.get(diff));
  }
}

let arr =[2.5, 7.5, 11.2, 15.1]
let target = 10.0
console.log(findTargetFOrDoubles(arr, target));
arr = [2.5, 7.5, 11.2, 15.1, 1.5]
target = 12.7
console.log(findTargetFOrDoubles(arr, target));
/*

Write a function that returns the sum of the indices of 2 numbers from array nums that add up to the floating-point number target.
All the floating-point numbers in array nums are distinct. It is guaranteed to have only one answer for this question.
Parameters: 1. nums : array of floating-point numbers
2. target : a floating-point number
Return value: 1. answer : a integer number Formulars (hint): target = nums[x] + nums[y] answer = x + y x,y are indices of array nums (base zero)

 

Example 1: Input nums = {2.5, 7.5, 11.2, 15.1} target = 10.0 Steps a. target = nums[x] + nums[y] i. target = 10.0 ii. nums = {2.5, 7.5, 11.2, 15.1} iii. nums[0] = 2.5 iv. nums[1] = 7.5 v. 10.0 = 2.5 + 7.5 b. answer = x + y i. x = 0 ii. y = 1 iii. answer = 0 + 1 Output answer = 1 

 

Example 2: Input nums = {2.5, 7.5, 11.2, 15.1, 1.5} target = 12.7 Steps a. target = nums[x] + nums[y] i. target = 12.7 ii. nums = {2.5, 7.5, 11.2, 15.1, 1.5} iii. nums[2] = 11.2 iv. nums[4] = 1.5 v. 12.7 = 11.2 + 1.5 b. answer = x + y i. x = 2 ii. y = 4 iii. answer = 2 + 4 Output answer = 6
*/