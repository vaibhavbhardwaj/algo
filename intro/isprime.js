const isPrime = (n) => {
    // todo
    //if (n == 1 || n ==2 ) return true
    let isPrime = true
    for (let i = 2;i < n/2 ;i++){
        if (n%i == 0) {
            isPrime = false
            break
        }
    }
    return isPrime
  };

console.log(isPrime(4))