//Write a function that takes in an array of numbers and returns the sum of all the numbers in the array. 
// All elements will be integers. Solve this recursively.
let sum =0
const sumRecursive = (numbers)=>{
//     sum = 0
//     for (let num of numbers){
//         console.log(num)
//         sum += num
//     }
//     console.log(sum)
// }

//console.log("1",numbers,sum)
if (numbers.length === 0)
   return 0

return numbers[0] + sumRecursive(numbers.slice(1))

}

console.log(sumRecursive([]))