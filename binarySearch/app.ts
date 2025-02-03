function search(nums: number[], target: number): number {
  let x = -1;
  x = nums.findIndex((x) => x === target);

  return x;
}

console.log(search([5], 5));
