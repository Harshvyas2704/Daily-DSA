/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let position = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[position]) {
      console.log(position);
      position++;
      nums[position] = nums[i];
    }
  }
  return position + 1;
};
