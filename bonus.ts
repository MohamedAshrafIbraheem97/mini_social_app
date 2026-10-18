function removeElement(nums: number[], val: number): number {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let k = nums[i];
    if (k === val) {
      nums.splice(i, 1);
      i--;
    } else {
      count++;
    }
  }
  return count;
}
