/* Write a function, maxValue, that takes in array of numbers as an argument. The function should return the largest number in the array.

Solve this without using any built-in array methods.

You can assume that the array is non-empty. */

const maxValue = (nums) => {
    // todo
    console.log(nums)
    for (let i = 0;i<nums.length;i++)
        if (nums[i] > nums[i+1])
            nums[i+1] = nums[i]
    return nums[nums.length-1]
};

x = maxValue([42])
console.log(x)