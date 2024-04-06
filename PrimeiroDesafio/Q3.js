let frascos = [12, 5, 23, 17, 8, 14, 3, 19];

const insertion_Sort = (nums) => {
    for (let i = 1; i < nums.length; i++) {
      let j = i - 1
      let temp = nums[i]
      while (j >= 0 && nums[j] > temp) {
        nums[j + 1] = nums[j]
        j--
      }
      nums[j+1] = temp
    }
    return nums
}

console.log(insertion_Sort(frascos))