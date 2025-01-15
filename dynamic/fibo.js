// Write a function fib that takes in a number argument, n, and returns the n-th number of the Fibonacci sequence.

// The 0-th number of the sequence is 0.

// The 1-st number of the sequence is 1.

// To generate further numbers of the sequence, calculate the sum of previous two numbers.

// Solve this recursively.

const fib = (n,memo={}) => {
    // todo
    if (n===1) return 1
    if (n === 0) return 0
    if (n in memo) return memo[n];
    memo[n] = fib(n-1,memo) + fib(n-2,memo)
    console.log(n,memo[n])
    return memo[n]
};

console.log(fib(100))