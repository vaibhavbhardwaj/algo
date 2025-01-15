const summingSquares = (n) => {
    // todo
    if (n === 0) return 0
    
    let min = Infinity
    for (let i=1;i<=Math.sqrt(n); i += 1){
        const sumSquare = 1 + summingSquares(n-i*i)
        min =  Math.min(sumSquare,min)
    }
    return min
  };

x =  summingSquares(8); // -> 2
console.log(x)