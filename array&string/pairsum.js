// Write a function, pairSum, that takes in an array and a target sum as arguments. The function should return an array containing a pair of indices whose elements sum to the given target. The indices returned must be unique.

// Be sure to return the indices, not the elements themselves.

// There is guaranteed to be one such pair that sums to the target.

const pairSum = (numbers, targetSum) => {
    // todo
    const previous = {}
    for (let i = 0;i < numbers.length;i++){
        //console.log(previous)
        const diff = targetSum - numbers[i]
        if (diff in previous){
            return [previous[diff],i]
        }
        previous[numbers[i]] = i
        
    }
  
   
  };


// const pair

x = pairSum([4, 7, 9, 2, 5, 1], 5); // -> [0, 5]

console.log(x)