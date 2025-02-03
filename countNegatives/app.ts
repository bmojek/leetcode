function countNegatives(grid: number[][]): number {
  const x = grid.flat().filter((x) => x < 0);

  return x.length;
}

console.log(
  countNegatives([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
  ])
);
