// Write a function sumNumbersRecursive that takes in an array of numbers and returns the sum of all the numbers in the array. All elements will be integers. Solve this recursively

const sumNumbersRecursive = (numbers) => {
    // todo
    console.log(numbers)
    if (numbers.length === 0) return 0
    return numbers[0] + sumNumbersRecursive(numbers.slice(1))
    

  };
x = sumNumbersRecursive([5, 2, 9, 10]); // -> 26
console.log(x)