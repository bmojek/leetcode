function peakIndexInMountainArray(arr: number[]): number {
  return arr.indexOf(Math.max(...arr));
}

console.log(peakIndexInMountainArray([0, 2, 1, 0]));
