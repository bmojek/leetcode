function searchInsert(nums: number[], target: number): number {
  const x = nums.findIndex((z) => z >= target);

  if (x === -1) return nums.length;
  return x;
}

console.log(searchInsert([1, 3, 5, 6], 5));
