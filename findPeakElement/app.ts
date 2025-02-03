function findPeakElement(nums: number[]): number {
  if (nums.length < 2) return 0;
  for (let index = 1; index < nums.length; index++) {
    if (nums[index] < nums[index - 1]) return index - 1;
  }
  return nums.length - 1;
}

console.log(findPeakElement([-2147483648, -2147483647]));
