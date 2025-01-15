// Write a function tribonacci that takes in a number argument, n, and returns the n-th number of the Tribonacci sequence.

// The 0-th and 1-st numbers of the sequence are both 0.

// The 2-nd number of the sequence is 1.

// To generate further numbers of the sequence, calculate the sum of previous three numbers.

// Solve this recursively.

const fib = (n,memo={}) => {
    // todo
    if (n===1) return 0
    if (n === 0) return 0
    if (n === 2) return 1
    if (n in memo) return memo[n];
    memo[n] = fib(n-1,memo) + fib(n-2,memo) + fib(n-3,memo)
    console.log(n,memo[n])
    return memo[n]
};

console.log(fib(3))